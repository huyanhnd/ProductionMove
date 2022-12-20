import axios from "axios";

const BASE_URL = "https://localhost:7102/api/";

// const auth = JSON.parse(localStorage.getItem("persist:root"))?.auth;
// const currentUser = auth && JSON.parse(auth).currentUser;
// const TOKEN = currentUser?.jwtToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { authorization: `Bearer ${TOKEN}` },
// });

export const userRequest = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: { authorization: `Bearer ${token}` },
  });
}