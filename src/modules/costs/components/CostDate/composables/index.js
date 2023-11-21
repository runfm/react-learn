export function getMonthText(date) {
  return date.toLocaleString("ru-RU", {
    month: "long",
  });
}

export function convertDate(date) {
  if (isFinite(date)) {
    let ISOString = date.toISOString();
    let [result] = ISOString.split("T");
    return result;
  }

  return ''
}
