import { api } from "../api/api";

export const getPosts = async (id) => {
  const res = await api.get(`/posts?userId=${id}`);
  if (!res.data) {
    throw new Error("No data");
  }
  return res.data;
};
