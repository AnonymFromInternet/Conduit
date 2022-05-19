export class TokenService {
  static setToken(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Cannot save token to localstorage: ", e);
      return;
    }
  }

  static getToken(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key)!);
    } catch (e) {
      console.error("Cannot get token from localstorage: ", e);
      return null;
    }
  }
}
