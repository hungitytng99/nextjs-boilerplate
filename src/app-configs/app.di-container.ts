import 'reflect-metadata'
import { HttpRequest } from '@/app-common/request/http/http.request'
import { CookiesStorage } from '@/app-common/storage/cookies.storage'
import IRequest from '@/shared/types/request/IRequest'
import { AxiosSymbol, ShareSymbol } from '@/shared/types/share.types'
import IStorage from '@/shared/types/storage/IStorage'
import ILogger from '@/shared/types/logger/ILogger'
import axios, { AxiosInstance } from 'axios'
import { Container } from 'inversify'
import { AppLogger } from '@/app-common/logger/app.logger'

const appContainer = new Container()
// Bind interface to specific instance
appContainer.bind<ILogger>(ShareSymbol.ILogger).to(AppLogger)
appContainer.bind<IRequest>(ShareSymbol.IRequest).to(HttpRequest)
appContainer.bind<IStorage>(ShareSymbol.IStorage).to(CookiesStorage)
appContainer.bind<AxiosInstance>(AxiosSymbol.Axios).toConstantValue(axios)

// Get instance to use
const appLogger = appContainer.get<ILogger>(ShareSymbol.ILogger)
const appRequest = appContainer.get<IRequest>(ShareSymbol.IRequest)
const appStorage = appContainer.get<IStorage>(ShareSymbol.IStorage)
const appFetch = appContainer.get<AxiosInstance>(AxiosSymbol.Axios)

export { appContainer, appLogger, appRequest, appStorage, appFetch }
