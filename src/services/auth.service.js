import axios from "axios";
const API_URL = "http://localhost:3001/users/";

const register = (email, password) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const checkAuth = () => {
  if (localStorage.getItem("user")) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    return axios
      .post(API_URL + "check", {
        token,
      })
      .then((response) => {
        if (response.data.valid) {
          return true;
        } else {
          return false;
        }
      });
  } else return false;
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  checkAuth,
};

export default authService;
