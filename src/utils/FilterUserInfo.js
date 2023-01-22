function FilterUserInfo(users, phoneNumber, nationalId) {
  return users.filter(
    (user) => user.phone_number == phoneNumber && user.national_id == nationalId
  );
}
// function checkCredentials(users, username) {
//   return users.filter((user) => user.phone_number === username);
// }
// const matchingUsers = FilterUserInfo(users, "0783305114", "1199880049682118");
// if (matchingUsers.length > 0) {
//   console.log("Credentials match!");
// } else {
//   console.log("Invalid username or password");
// }

export default FilterUserInfo;
