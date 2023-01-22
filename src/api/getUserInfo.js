import axios from "axios";
// Get User Information from the fake API endpoint
const getUserInfo = async () => {
  const baseUrl = "http://localhost:3000";
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};

export default getUserInfo;
