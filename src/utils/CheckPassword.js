function CheckPassword(password) {
  if (password != "" && !password.length <= 7) return true;
  return false;
}
export default CheckPassword;
