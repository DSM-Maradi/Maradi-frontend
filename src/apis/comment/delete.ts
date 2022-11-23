import instance from "../axios";

export const deletecomment = async (comment_id: number) => {
  const response = await instance.delete(`/comment/${comment_id}`);
};
