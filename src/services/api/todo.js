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

const getTodos = async () => {
  try {
    const res = await axiosAuthInstance.get("/todos");
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
  getTodos,
};

export default todoApi;