import Cookies from "js-cookie";
import IStorage from "@/shared/types/storage/IStorage";
import { injectable } from "inversify";

@injectable()
export class CookiesStorage implements IStorage {
  setItem(key: string, value: string, options: Cookies.CookieAttributes = {}) {
    return Cookies.set(key, value, {
      sameSite: "strict",
      secure: true,
      ...options,
    });
  }
  getItem(key: string) {
    return Cookies.get(key);
  }
  removeItem(key: string) {
    Cookies.remove(key);
    return key;
  }
}
