import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import { IData } from './types';
import { UpdateProfile } from './types';
import { LoginDetail } from './types';
import {  } from 'axios';
const getAuthToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
            return value;
        }
        return '';
    } catch (e) {
        return '';
    }
};

interface RequestInit {
    [key: string]: string;
}

export default async function api(
    path: string,
    body: any,
    method: string,
    authorization = true,
) {
    const token = await getAuthToken();
    let options: { headers: RequestInit; method: string };
    if (!authorization) {
        options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, private',
                Pragma: 'no-cache',
            },
            method: method,
            ...(body && { body: JSON.stringify(body) }),
        };
    } else {
        options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
                'Cache-Control': 'no-cache, private',
                Pragma: 'no-cache',
            },
            method: method,
            ...(body && { body: JSON.stringify(body) }),
        };
    }

    return NetInfo.fetch()
        .then((state) => {
            if (state.isConnected) {
                return true;
            }
            Toast.show('you are offline', Toast.SHORT);
            throw 'network request failed';
        })
        .then(() => fetch(path, options))
        .then((resp) => resp.json())
        .then((json) => json)
        .catch((error) => {
            if (error === 'network request failed') {
                return { status: 'networkFailed' };
            }
            return error;
        });
}
