const ShareTypes = {
  ILogger: Symbol.for("ILogger"),
  IRequest: Symbol.for("IRequest"),
  IStorage: Symbol.for("IStorage"),
};

const AxiosTypes = {
  Axios: Symbol.for("Axios"),
};

export { ShareTypes, AxiosTypes };
