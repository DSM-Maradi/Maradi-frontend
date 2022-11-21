import instance from "../axios";

interface searchProjectRequestType {
  order: string;
  name: string;
}

export interface projectType {
  id: number;
  name: string;
  content: string;
  date: string;
  target_funding_amount: number;
  funding_amount: number;
}

interface searchProjectResponseType {
  projects: projectType[];
}

export const searchProject = async ({
  order,
  name,
}: searchProjectRequestType) => {
  const { data } = await instance.get<searchProjectResponseType>(
    `/project?order=${order}&name=${name}`
  );
  return data;
};
