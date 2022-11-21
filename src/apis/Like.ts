import instance from "./axios";

export const patchLike = async (project_id?: string) => {
  const { data } = await instance.patch(`/project/${project_id}`);
  return data;
};
