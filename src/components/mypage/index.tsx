import Header from "../common/header";
import styled from "styled-components";
import ProjectCard from "./projectcard";
import { useEffect, useState } from "react";
import { myProject, myProjectResType } from "../../apis/project/My";
import { mypage, MyPageType } from "../../apis/profile";

const MyPage = () => {
  const [checked, setChecked] = useState<number>(-1);
  const [projectList, setProjectList] = useState<null | myProjectResType>(null);
  const [mypageUser, setMyPageUser] = useState<MyPageType>();
  useEffect(() => {
    myProject()
      .then((res) => {
        setProjectList(res);
      })
      .catch((err) => console.log(err));
    mypage()
      .then((res) => setMyPageUser(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Wrapper>
      <Header />
      <MyInformationWrapper>
        <WelcomeText>{mypageUser?.name}님 환영합니다 !</WelcomeText>
        <FundingWrapper>
          <Amount>
            <Title>총 펀딩받은 남은금액</Title>
            <Money>{mypageUser ? mypageUser.receive_funding : 0}원</Money>
          </Amount>
          <Amount>
            <Title>총 펀딩한 금액</Title>
            <Money>{mypageUser ? mypageUser.to_funding : 0}원</Money>
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
          {projectList &&
            projectList.my_project.map((project, key) => (
              <ProjectCard
                key={key}
                id={project.id}
                name={project.name}
                content={project.content}
                date={project.date}
                target_funding_amount={project.target_funding_amount}
                funding_amount={project.funding_amount}
                setChecked={setChecked}
                checked={checked}
                image_url={project.image_url}
              />
            ))}
        </ListWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <Text>좋아요 누른 프로젝트</Text>
        <ListWrapper>
          {projectList &&
            projectList.liked_project.map((project, key) => (
              <ProjectCard
                key={key}
                id={project.id}
                name={project.name}
                content={project.content}
                date={project.date}
                target_funding_amount={project.target_funding_amount}
                funding_amount={project.funding_amount}
                setChecked={setChecked}
                checked={checked}
                image_url={project.image_url}
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
  :hover {
    background: ${({ theme }) => theme.color.error};
    color: ${({ theme }) => theme.color.white};
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
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
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
