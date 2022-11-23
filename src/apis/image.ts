import instance from "./axios";

export const uploadImage = async (formdata: FormData) => {
  const response = await instance.post(`/project/image`, formdata);
  return response;
};
