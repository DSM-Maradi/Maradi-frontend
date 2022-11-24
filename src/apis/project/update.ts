import instance from "../axios";

export const updateProject = async (
  project_id: number,
  name: string,
  content: string,
  image_url: string
) => {
  await instance.put(`/project/${project_id}`, {
    title: name,
    content: content,
    image_url: image_url,
    image_description: "",
  });
};
