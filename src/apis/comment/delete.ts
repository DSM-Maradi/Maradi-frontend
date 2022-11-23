import instance from "../axios";

export const deletecomment = async (id: number) => {
  const response = await instance.delete(`comment/${id}`);
  return response;
};
