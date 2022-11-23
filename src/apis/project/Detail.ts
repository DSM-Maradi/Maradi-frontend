import instance from "../axios";

export interface commentType {
  id: number;
  name: string;
  content: string;
}

export interface detailResponseType {
  title: string;
  content: string;
  like_count: number;
  is_liked: true;
  name: string;
  profile_image: string;
  comment: commentType[];
}

export const projectDetail = async (projectId: string) => {
  const { data } = await instance.get<detailResponseType>(
    `/project/${projectId}`
  );
  return data;
};
