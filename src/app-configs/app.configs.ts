const appConfigs = {
  logPipes: [console],
};

enum RequestState {
  initial = "initial",
  request = "request",
  success = "success",
  error = "error",
}

export { appConfigs, RequestState };
