import { setUserLogin } from "./accessToken";
import { setUserValue } from "./hooks";
import { inUser } from "./inUser";

export async function requestUser() {
    try {
      const result = await inUser();
      if (result) {
        setUserLogin(result.user.login)
        setUserValue(result)
      }
    } catch { /* empty */ }
  }