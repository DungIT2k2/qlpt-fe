import axios from "../utils/axiosCustomize";

const postLogin = (username, password) => {
  return axios.post("login", { username, password });
};

const getDataRoom = () => {
  return axios.get('room/get');
}

const createNewRoom = (name, owner, status) => {
  return axios.post('room/create', { name, owner, status})
}

export { postLogin, getDataRoom, createNewRoom };
