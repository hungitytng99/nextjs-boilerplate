const appContants = {
  primaryEndPoint: '',

  // Key of value which store in Session, Cookies, LocalStorage
  tokenKey: 'tokenKey',
}

enum RequestState {
  initial = 'initial',
  request = 'request',
  success = 'success',
  error = 'error',
}

export { appContants, RequestState }
