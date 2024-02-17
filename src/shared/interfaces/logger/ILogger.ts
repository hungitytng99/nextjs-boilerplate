export default interface ILogger {
  log(...args: any): void
  error(...args: any): void
  warn(...args: any): void
  debug(...args: any): void
}
