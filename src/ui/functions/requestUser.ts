import { setUserValue } from "./hooks";
import { inUser } from "./inUser";

export async function requestUser() {
    try {
      const result = await inUser();
      if (result) {
        setUserValue(result)
      }
    } catch { /* empty */ }
  }