export default function currentDate(addHours) {
    let date = new Date();
    date.setHours(date.getHours() + addHours);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    date = date.toISOString().slice(0,16);

    return date;
}