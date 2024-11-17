import axios from "../utils/axiosCustomize";

const postLogin = (username, password) => {
  return axios.post("login", { username, password });
};

const getDataRoom = () => {
  return axios.get('room/get');
}

const createNewRoom = (name, owner, status) => {
  return axios.post('room/create', { name, owner, status })
}

const getRoom = (id) => {
  return axios.post('room/get', { id });
}

const updateRoom = (id, name, owner, status) => {
  return axios.put('room/update', {
    id, dataUpdate: {
      name,
      owner,
      status
    }
  });
}

const getDataBill = (month, year) => {
  return axios.post('user/checkpayment', { month, year });
}


export { postLogin, getDataRoom, createNewRoom, getRoom, updateRoom, getDataBill };
