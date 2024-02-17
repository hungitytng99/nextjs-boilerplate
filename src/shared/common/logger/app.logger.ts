import { appConfigs } from '@/app-configs/app.configs'
import ILogger from '@/shared/interfaces/logger/ILogger'
import { injectable } from 'inversify'

@injectable()
export class AppLogger implements ILogger {
  log(...args: any): void {
    appConfigs.logPipes.forEach((logPipe: ILogger) => {
      logPipe.log(...args)
    })
  }
  error(...args: any): void {
    appConfigs.logPipes.forEach((logPipe: ILogger) => {
      logPipe.error(...args)
    })
  }
  warn(...args: any): void {
    appConfigs.logPipes.forEach((logPipe: ILogger) => {
      logPipe.warn(...args)
    })
  }
  debug(...args: any): void {
    appConfigs.logPipes.forEach((logPipe: ILogger) => {
      logPipe.debug(...args)
    })
  }
}
