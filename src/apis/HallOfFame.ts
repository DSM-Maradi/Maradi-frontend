import instance from "./axios";

export interface UsersType {
  rank: number;
  name: string;
  amount: number;
}

interface HallOfFameResponseType {
  users: UsersType[];
}

export const HallOfFame = async () => {
  const { data } = await instance.get<HallOfFameResponseType>("/hall-of-fame");
  return data;
};
