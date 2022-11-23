import instance from "./axios";

export interface UploadType {
  ContentType: string;
  file: FormData;
}

export const uploadImage = async (formdata: FormData) => {
  const response = await instance.post(`project/files`, formdata);
  return response;
};
