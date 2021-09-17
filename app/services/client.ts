import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
        // saving error
    }
};
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

export type Props = {
    object: {
        header: {
            Accept: object;
            Authorization: object;
            Pragma: string;
            APIKey: number;
        };
    };
};

export default async function api(
    path: string,
    body: object | string | null,
    method: string,
    authorization = true,
) {
    const token = await getAuthToken();
    let options: object;
    if (!authorization) {
        options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, private',
                Pragma: 'no-cache',
                APIKey: 12355,
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
                APIKey: 12355,
            },
            method: method,
            ...(body && { body: JSON.stringify(body) }),
        };
    }

    return fetch(path, options)
        .then((resp) => resp.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            return error;
        });
}
