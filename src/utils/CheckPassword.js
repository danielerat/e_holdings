function CheckPassword(password) {
  const expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (password != "" && expression.test(password)) return true;
  return false;
}
export default CheckPassword;
