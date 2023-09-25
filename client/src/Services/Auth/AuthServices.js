import axios from "axios";

export const login = async (form) => {
  return await axios.post("http://localhost:3001/auth/login", form);
};

export const register = async (form) => {
  return await axios.post("http://localhost:3001/auth/register", form);
};

export const getUser = async () => {
  const response = await axios.get("http://localhost:3001/auth/user");
  return response.data.user;
};
