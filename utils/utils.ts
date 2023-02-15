export const getMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString('en-US', { month: 'long' });
};

export const getFormattedDate = (unformattedDate: string) => {
    const date = new Date(unformattedDate);

    return `${getMonthName(date.getMonth()).substring(
        0,
        3,
    )} ${date.getDate()}, ${date.getFullYear()}`;
};
