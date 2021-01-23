import axios from "axios";
import authHeader from "./auth-header";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");

const addShop = (body) => {
  return axios.post(`http://localhost:3001/shops/`, body, {
    headers: authHeader("file"),
  });
};

const editShop = (id, body) => {
  return axios.patch(`http://localhost:3001/shops/${id}`, body, {
    headers: authHeader("file"),
  });
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
const getShop = (id) => {
  return axios.get(`http://localhost:3001/shops/${id}`);
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

const addMessage = (body) => {
  return axios.post(`http://localhost:3001/messages/`, { ...body });
};

const getImage = (shop) => {
  let src = "../img/two.png";
  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };
  if (shop) {
    var base64Flag = "data:" + shop.photo.data.contentType + ";base64,";
    var imageStr = arrayBufferToBase64(shop.photo.data.data);
    src = base64Flag + imageStr;
  }
  return src;
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
  getImage,
  getShop,
};

export default UserService;
