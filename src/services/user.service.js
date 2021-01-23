import axios from "axios";
import authHeader from "./auth-header";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
const editShop = (id, body) => {
  return axios.patch(
    `http://localhost:3001/shops/${id}`,
    {
      ...body,
    },
    { headers: authHeader() }
  );
};

const getAllMessages = () => {
  return axios.get("http://localhost:3001/messages/", {
    headers: authHeader(),
  });
};

const checkIfLoggedIn = () => {
  let temp = axios.get("http://localhost:3001/messages/", {
    headers: authHeader(),
  });
  temp
    .then(() => {
      console.log("logged in");
      return true;
    })
    .catch(() => {
      console.log("logged out");
      return false;
    });
};

const getMessageDetails = (id) => {
  return axios.get(`http://localhost:3001/messages/${id}`, {
    headers: authHeader(),
  });
};

const deleteShop = (id) => {
  return axios.delete(`http://localhost:3001/shops/${id}`, {
    headers: authHeader(),
  });
};
const deleteMessage = (id) => {
  return axios.delete(`http://localhost:3001/messages/${id}`, {
    headers: authHeader(),
  });
};
const addShop = (body) => {
  return axios.post(`http://localhost:3001/shops/`, body, {
    headers: authHeader("file"),
  });
};

const addMessage = (body) => {
  return axios.post(`http://localhost:3001/messages/`, { ...body });
};

const UserService = {
  deleteMessage,
  getAllMessages,
  editShop,
  deleteShop,
  addShop,
  addMessage,
  getMessageDetails,
  checkIfLoggedIn,
};

export default UserService;
