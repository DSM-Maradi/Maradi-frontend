import instance from "./axios";

export interface myProfileType {
  name: string;
  profile_image: string;
}

export const myprofile = async () => {
  const response = await instance.get(`/project/myprofile`);
  return response;
};
