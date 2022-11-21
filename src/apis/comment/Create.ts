import instance from "../axios";

export const createComment = async (content: string, project_id?: string) => {
  const { data } = await instance.post(`/project/${project_id}`, { content });
  return data;
};
