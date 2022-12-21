function CheckId(id) {
  const expression = /^[1][1-2][7-9]\d{13}$/;
  if (expression.test(id)) return true;
  return false;
}
export default CheckId;
