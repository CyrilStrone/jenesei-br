export const checkRefreshName = "BusinessRouletteRefreshCheck";
export const accessTokenName = "BusinessRouletteToken";
export const userValueTokenName = "BusinessRouletteUserValue";

export const changeAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem(accessTokenName, accessToken);
};

export const changeCheckRefreshToLocalStorage = (check: string) => {
  localStorage.setItem(checkRefreshName, check);
};

export const changeUserValueTokenName = (value: string) => {
  localStorage.setItem(userValueTokenName, value);
};
