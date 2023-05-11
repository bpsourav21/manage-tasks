import { currentUserKey } from "./constant";

export const getStoageData = async (key: string) => {
    const rawData = await localStorage.getItem(key) || "[]";
    return JSON.parse(rawData)
}

export const setStoageData = async (key: string, data: any) => {
    await localStorage.setItem(key, JSON.stringify(data));
}

export const setCurrentUser = async (val: string = "") => {
    await localStorage.setItem(currentUserKey, val);
}

export const isUserLoggedIn = async () => {
    const data = await localStorage.getItem(currentUserKey);
    if (data == "") {
        return null;
    }
    return data;
}