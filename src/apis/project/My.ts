import instance from "../axios";

export interface projectType {
  id: number;
  name: string;
  content: string;
  date: string;
  target_funding_amount: number;
  funding_amount: number;
}

export interface myProjectResType {
  my_project: projectType[];
  liked_project: projectType[];
}

export const myProject = async () => {
  const { data } = await instance.get<myProjectResType>(`/project/my`);
  return data;
};
