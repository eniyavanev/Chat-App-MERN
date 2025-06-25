import { BASE_URL } from "./api";
import { registerUser, loginUser, getAllUsers } from "./endpoint";
import axios from "axios";

export const registerUserApi = (data: FormData) => {
  return axios.post(`${BASE_URL}${registerUser}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true, 
  });
};

export const loginUserApi = (data: { email: string; password: string }) => {
  return axios.post(`${BASE_URL}${loginUser}`, data, {
    withCredentials: true, 
  });
};


export const getAllUsersApi = () => {
 return axios.get(`${BASE_URL}${getAllUsers}`, {
  withCredentials: true,
});
};
