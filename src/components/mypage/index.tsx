import Header from "../common/header";
import styled from "styled-components";
import { ProjectList } from "../../constance/projectlist";
import ProjectCard from "./projectcard";
import { useState } from "react";

const MyPage = () => {
  const [checked, setChecked] = useState<number>(-1);
  return (
    <Wrapper>
      <Header />
      <MyInformationWrapper>
        <WelcomeText>디자인해라님 환영합니다 !</WelcomeText>
        <FundingWrapper>
          <Amount>
            <Title>총 펀딩받은 남은금액</Title>
            <Money>100000만원</Money>
          </Amount>
          <Amount>
            <Title>총 펀딩받은 남은금액</Title>
            <Money>100000만원</Money>
          </Amount>
        </FundingWrapper>
      </MyInformationWrapper>
      <BankWrapper>
        <InputItems>
          <Input placeholder="계좌번호를 입력해주세요." />
        </InputItems>
        <WithdrawalButton>출금하기</WithdrawalButton>
      </BankWrapper>
      <ProjectWrapper>
        <Text>나의 프로젝트</Text>
        <ListWrapper>
          {ProjectList.map((e) => (
            <ProjectCard
              key={e.id}
              index={e.id}
              title={e.title}
              text={e.text}
              date={e.date}
              goalMoney={e.goalMoney}
              nowMoney={e.nowMoney}
              checked={checked}
              setChecked={setChecked}
            />
          ))}
        </ListWrapper>
      </ProjectWrapper>
    </Wrapper>
  );
};

const WithdrawalButton = styled.button`
  width: 105px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: 8px;
  background: none;
  color: ${({ theme }) => theme.color.error};
  cursor: pointer;
  :hover{
    background: ${({theme}) => theme.color.error};
    color: ${({theme}) => theme.color.white};
  }

`;

const Input = styled.input`
  width: 95%;
  height: 20px;
  margin-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.black};
`;

const InputItems = styled.div`
  width: 400px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

const BankWrapper = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;

const Money = styled.span`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray900};
`;

const Amount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FundingWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 5% 0;
`;

const WelcomeText = styled.div`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;

const MyInformationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 80px;
`;

const ListWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default MyPage;
