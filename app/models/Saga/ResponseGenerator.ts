export interface ResponseGenerator{
  config?:string,
  data?:string,
  headers?:object,
  params?:string,
  request?:object | string | number,
  status?:string,
  statusText?:string,
  result?:object,
  token?: string
  response?: object | undefined,

}