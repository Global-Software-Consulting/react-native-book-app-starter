


export default async function api(
  path: string,
  params: any,
  method: string,
) {

  let options = {
    headers: {
      'Content-Type': 'application/json',

    },
    method: method,
    ...(params && {body: JSON.stringify(params)}),
  };
  console.log('path', path);
  console.log('options', options);

  let fetch_result = await fetch(path, options)
    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader
      return responseJson;
    })
    .catch((error) => {
      //Hide Loader

      return error;
    });
  return fetch_result;
}
