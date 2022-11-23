import instance from "../axios";

interface createProjectRequestType {
  title: string;
  content: string;
  image_url: string;
  image_description: string;
}

export const createProject = async ({
  title,
  content,
  image_description,
  image_url,
}: createProjectRequestType) => {
  const { data } = await instance.post(`/project`, {
    title,
    content,
    image_description,
    image_url,
  });
  return data;
};
