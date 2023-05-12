export const getStoageData = async (key: string) => {
    const rawData = await localStorage.getItem(key) || "[]";
    return JSON.parse(rawData)
}

export const setStoageData = async (key: string, data: any) => {
    await localStorage.setItem(key, JSON.stringify(data));
}