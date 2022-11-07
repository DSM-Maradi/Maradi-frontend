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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectWrapper = styled.div`
  margin-top: 10%;
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
