// Symbol using for di container
const ShareSymbol = {
  ILogger: Symbol.for("ILogger"),
  IRequest: Symbol.for("IRequest"),
  IStorage: Symbol.for("IStorage"),
};

const AxiosSymbol = {
  Axios: Symbol.for("Axios"),
};

export { ShareSymbol, AxiosSymbol };
