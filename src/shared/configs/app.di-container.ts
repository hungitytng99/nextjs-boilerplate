import 'reflect-metadata';
import { AppLogger } from '@/shared/common/logger/app.logger';
import { HttpRequest } from '@/shared/common/request/http/http.request';
import { CookiesStorage } from '@/shared/common/storage/cookies.storage';
import ILogger from '@/shared/interfaces/logger/ILogger';
import IRequest from '@/shared/interfaces/request/IRequest';
import { AxiosSymbol, ShareSymbol } from '@/shared/interfaces/share.types';
import IStorage from '@/shared/interfaces/storage/IStorage';
import axios, { AxiosInstance } from 'axios';
import { Container } from 'inversify';

const appContainer = new Container();
// Bind interface to specific instance
appContainer.bind<ILogger>(ShareSymbol.ILogger).to(AppLogger);
appContainer.bind<IRequest>(ShareSymbol.IRequest).to(HttpRequest);
appContainer.bind<IStorage>(ShareSymbol.IStorage).to(CookiesStorage);
appContainer.bind<AxiosInstance>(AxiosSymbol.Axios).toConstantValue(axios);

// Get instance to use
const appLogger = appContainer.get<ILogger>(ShareSymbol.ILogger);
const appRequest = appContainer.get<IRequest>(ShareSymbol.IRequest);
const appStorage = appContainer.get<IStorage>(ShareSymbol.IStorage);
const appFetch = appContainer.get<AxiosInstance>(AxiosSymbol.Axios);

export { appContainer, appFetch, appLogger, appRequest, appStorage };
