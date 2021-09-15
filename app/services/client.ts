
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('token', jsonValue)
  } catch (e) {
    // saving error
  }
}
const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value;
    }
    return "";
  } catch (e) {
    return "";
  }
};



export default async function api(path, body, method,authorization:boolean=true) {
 
  let token = await getAuthToken();
 let options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      "Cache-Control": "no-cache, private",
      Pragma: "no-cache",
      APIKey: 12355,
    },
    method: method,
    ...(body && { body: JSON.stringify(body) }),
  };
if(!authorization){
  delete options.headers.Authorization
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