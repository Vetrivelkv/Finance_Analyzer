import { axiosInstance } from "../../../network/apis";

// Replace endpoint and change api name
const loginApi = async (data) => {
  return await axiosInstance.post(`/user/login`, data);
};

const tokenVerifyApi = async (data) => {
  return await axiosInstance.post("/user/verifytoken", data);
};

const api = {
  loginApi,
  tokenVerifyApi,
};

export default api;
