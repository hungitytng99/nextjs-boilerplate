const appContants = {
  primaryEndPoint: process.env.PRIMARY_END_POINT,

  // Key of value which store in Session, Cookies, LocalStorage
  tokenKey: 'tokenKey',
};

enum RequestState {
  initial = 'initial',
  request = 'request',
  success = 'success',
  error = 'error',
}

enum RequestStatus {
  ok = 200,
  authRequired = 401,
  failure = 404,
  serviceUnavailable = 502,
  serverError = 500,
}

export { appContants, RequestState, RequestStatus };
