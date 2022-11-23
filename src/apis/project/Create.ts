import instance from "../axios";

interface createProjectRequestType {
  title: string;
  content: string;
  image_url: string;
  image_description: string;
  target_funding_amount: number;
}

export const createProject = async ({
  title,
  content,
  image_description,
  image_url,
  target_funding_amount,
}: createProjectRequestType) => {
  const { data } = await instance.post(`/project`, {
    title,
    content,
    image_description,
    image_url,
    target_funding_amount,
  });
  return data;
};
