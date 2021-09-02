interface IResponse {
    detail: string;
  }
  
  export interface IBookResponse {
    type: String;
    response: IResponse;
  }

  export interface IBookRequest {
    type: String;
  };

