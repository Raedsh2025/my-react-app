import axios from "./axios";

export const getCart = async () => {
  const { data } = await axios.get("/cart");

  return data;
};