import { appContainer } from ".";
import IRequest from "@/shared/types/request/IRequest";
import { ShareTypes } from "@/shared/types/share.types";
import ILogger from "@/shared/types/logger/ILogger";
import IStorage from "@/shared/types/storage/IStorage";

export const appRequest = appContainer.get<IRequest>(ShareTypes.IRequest);
export const appConsole = appContainer.get<ILogger>(ShareTypes.ILogger);
export const appStorage = appContainer.get<IStorage>(ShareTypes.IStorage);
