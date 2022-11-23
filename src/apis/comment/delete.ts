import instance from "../axios";

export const deletecomment = async (comment_id: number) => {
  await instance.delete(`/project/comment/${comment_id}`);
};
