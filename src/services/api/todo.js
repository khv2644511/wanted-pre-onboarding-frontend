import { AxiosError } from "axios";
import { axiosAuthInstance } from "./client";

const createTodo = async (todo) => {
  try {
    const res = await axiosAuthInstance.post("/todos", { todo });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const todoApi = {
  createTodo,
};

export default todoApi;
