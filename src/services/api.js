import axios from "axios";

export const api = axios.create({
  baseURL: "https://657a03561acd268f9afa92f5.mockapi.io/api/v1/todos",
});
