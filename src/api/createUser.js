import axios from "axios";

const createUser = async (user, password) => {
  console.log("The User Data --------------------------------");
  console.log(password);
  console.log(user);
  console.log(user.national_id);
  let formData = new FormData();

  formData.append("nid", user.national_id);
  formData.append("password", password);
  formData.append("phone", user.phone_number);
  formData.append("name", user.first_name + " " + user.last_name);
  formData.append("first_name", user.first_name);
  formData.append("last_name", user.last_name);
  await axios
    .post("e-hold/v1/register/", formData)
    .then(() => {
      console.log("User Created Successfully");
    })
    .catch((error) => {
      console.log("Error Creating the user");
      console.log(error);
    });
};
export default createUser;
