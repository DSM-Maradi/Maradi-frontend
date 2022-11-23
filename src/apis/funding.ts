import instance from "./axios";

export interface FundingType {
  amount: number;
}

export const fundingProject = async (project_id: number, money: number) => {
  const response = await instance.post<FundingType>(
    `project/funding/${project_id}`,
    {
      amount: money,
    }
  );
  return response;
};
