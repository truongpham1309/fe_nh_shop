export const convertToShortDateFormat = (isoDateString: string) => {
    const date = new Date(isoDateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}`;
}
