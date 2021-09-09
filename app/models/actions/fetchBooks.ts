interface IResponse {
    detail: string;
  }
  
  export interface IBookResponse {
    type: string;
    response: IResponse;
  }

  export interface IBookRequest {
    type: string;
    keyword: String;
  };

export interface ISetFavorite {
  type:string;
  response: IBookResponse;
}