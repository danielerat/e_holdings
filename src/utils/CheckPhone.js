function CheckPhone(phone) {
  const expression = /^\+?[0-9][0-9]{7,14}$/;
  if (phone != "" && expression.test(phone)) return true;
  return false;
}
export default CheckPhone;
