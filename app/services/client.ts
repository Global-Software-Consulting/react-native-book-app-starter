
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('token', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getToken = async() => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null){
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
}

export default async function api(
  path: string,
  params: any,
  method: string,
  calllType: 'byParams' | 'byBody' | 'byHeader',
) {
  let authToken = await getToken();
  let parsedValue = JSON.parse(authToken)
  const token = parsedValue.token
  console.log('takan',token)

  let options;
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
