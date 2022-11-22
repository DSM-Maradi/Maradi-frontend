import instance from "./axios";

export interface MyPageType {
  name: string;
  to_funding: number;
  receive_funding: number;
}

export const mypage = async () => {
  const response = await instance.get<MyPageType>(`project/mypage`);
  return response;
};
