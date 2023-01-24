import axios from "axios";
const sendMessage = async (recipient, code) => {
  let formData = new FormData();
  formData.append("phone", recipient);
  formData.append("code", code);
  await axios
    .post("e-hold/v1/sms/send", formData)
    .then(() => {
      console.log("Message Send Successfully");
    })
    .catch((error) => {
      console.log("Error sending message");
      console.log(error);
    });
};
export default sendMessage;
