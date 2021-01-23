export default function authHeader(file = "") {
  const user = JSON.parse(localStorage.getItem("user"));
  if (file === "file" && user && user.token) {
    return {
      Authorization: "Bearer " + user.token,
      "Content-Type": "multipart/form-data",
    };
  } else if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
