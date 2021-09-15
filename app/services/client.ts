
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
const getToken = async (value) => {
  return  await AsyncStorage.getItem('token')
 
}

export default async function api(
  path: string,
  params: any,
  method: string,
  calllType: 'byParams' | 'byBody' | 'byHeader' | 'byHeader&Params',
) {
  let options;
  let authToken =getToken()
  if (calllType=='byBody')
  {
    options= {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    

    },
    method: method,
    body: JSON.stringify(params)
  }}
  else if (calllType=='byParams') {

     options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: method,
      body: null
     
  }
  }
  else if(calllType=='byHeader')
  {
const intoToken = params;
const parsedData = JSON.parse(intoToken);
const token = parsedData.token;
console.log('paramso',params)
    options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': 'Bearer ' + token
      },
      method: method,
      body: null  
  }
}
else if(calllType=='byHeader&Params')
  {
const intoToken = params;
const parsedData = JSON.parse(intoToken);
const token = parsedData.token;
console.log('paramso',params)
    options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': 'Bearer ' + token
      },
      method: method,
      body: null  
  }
}

  let fetch_result = await fetch(path, options )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.token)  { 
        storeData(responseJson)
        return responseJson;
      }
       else { 
          return responseJson;

        }
      
    
      //Hide Loader
  })
    .catch((error) => {
      //Hide Loader
      Alert.alert('Book App',error);

      return error;
    });
  return fetch_result;
}
