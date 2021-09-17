import AsyncStorage from '@react-native-async-storage/async-storage';

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
    headers: {
        Accept: string;
        'Content-Type': string;
        'Cache-Control': string;
        Authorization?: string;
        Pragma: string;
        APIKey: number;
    };
    method: string;
}

interface IData {
    data: [];
}
export default async function api(
    path: string,
    body: IData | string | null,
    method: string,
    authorization = true,
) {
    const token = await getAuthToken();
    let options: RequestInit;
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
