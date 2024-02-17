export default interface ICommonResponse {
    status?: number;
    message?: string;
    data?: Array<any> | object | string | number;
  }
  