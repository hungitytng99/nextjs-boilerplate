import "reflect-metadata";
import { HttpRequest } from "@/app-common/request/http/http.request";
import { CookiesStorage } from "@/app-common/storage/cookies.storage";
import IRequest from "@/shared/types/request/IRequest";
import { AxiosTypes, ShareTypes } from "@/shared/types/share.types";
import IStorage from "@/shared/types/storage/IStorage";
import ILogger from "@/shared/types/logger/ILogger";
import axios, { AxiosInstance } from "axios";
import { Container } from "inversify";
import { AppLogger } from "@/app-common/logger/app.logger";

const appContainer = new Container();
// Bind interface to specific instance
appContainer.bind<ILogger>(ShareTypes.ILogger).to(AppLogger);
appContainer.bind<IRequest>(ShareTypes.IRequest).to(HttpRequest);
appContainer.bind<IStorage>(ShareTypes.IStorage).to(CookiesStorage);
appContainer.bind<AxiosInstance>(AxiosTypes.Axios).toConstantValue(axios);

// Get instance to use
const appLogger = appContainer.get<ILogger>(ShareTypes.ILogger);
const appRequest = appContainer.get<IRequest>(ShareTypes.IRequest);
const appStorage = appContainer.get<IStorage>(ShareTypes.IStorage);
const appFetch = appContainer.get<AxiosInstance>(AxiosTypes.Axios);

export { appContainer, appLogger, appRequest, appStorage, appFetch };
