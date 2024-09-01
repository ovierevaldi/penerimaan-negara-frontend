export const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString(); // ISO format: YYYY-MM-DDTHH:MM:SS.sssZ
};