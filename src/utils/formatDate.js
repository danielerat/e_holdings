function formatDate(d) {
  const date = new Date(d);
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "short" });
  return month + " " + day + ", " + year;
}
export default formatDate;
