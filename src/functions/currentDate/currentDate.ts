export default function currentDate(addHours: number): string {
  const date: Date = new Date();
  date.setHours(date.getHours() + addHours || 0);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}
