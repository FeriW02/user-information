import { api } from "../api/api";

export const getTodos = async (id) => {
  const res = await api.get(`/todos?userId=${id}`);
  if (!res.data) {
    throw new Error("No data");
  }
  return res.data;
};
