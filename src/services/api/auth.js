import { AxiosError } from "axios";
import { axiosInstance } from "./client";

const signIn = async (loginData) => {
  try {
    const res = await axiosInstance.post("/auth/signin", loginData);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.details);

      return error.response;
    }
    console.log(error);
  }
};

const authApi = {
  signIn,
};

export default authApi;
