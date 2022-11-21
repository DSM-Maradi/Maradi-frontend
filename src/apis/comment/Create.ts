import instance from "../axios";

export const createProject = async (content: string, project_id?: string) => {
  const { data } = await instance.post(`/project/${project_id}`, { content });
  return data;
};
