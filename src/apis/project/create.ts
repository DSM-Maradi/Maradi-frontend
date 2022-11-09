import instance from "../axios";

function projectCreate(
  title: string,
  content: string,
  image_url: string,
  image_description: string
) {
  const response = instance.post("/project", {
    title: title,
    content: content,
    image_url: image_url,
    image_description: image_description,
  }, {
    headers: {
        Authorization: "Bearer " + localStorage,
    }
  });
  return response;
}

export default projectCreate;
