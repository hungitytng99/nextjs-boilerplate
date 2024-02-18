export default interface ICommonResponse<T> {
  status?: number;
  message?: string;
  data?: T;
}
