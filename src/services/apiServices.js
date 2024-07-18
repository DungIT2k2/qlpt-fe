import axios from "../utils/axiosCustomize";

const postLogin = (username, password) => {
  console.log(username, password);
  return axios.post("login", { username, password });
};

export { postLogin };
