export default interface IStorage {
  setItem(key: string, value: string, options?: Object): any
  getItem(key: string): string | undefined
  removeItem(key: string): string | undefined
}
