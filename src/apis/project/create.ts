import instance from "../axios";

export default async function projectCreate(
  title: string,
  content: string,
  image_url: string,
  image_description: string
) {
  const response = await instance.post(
    "/project",
    {
      title: title,
      content: content,
      image_url: image_url,
      image_description: image_description,
    },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );
  return response;
}
