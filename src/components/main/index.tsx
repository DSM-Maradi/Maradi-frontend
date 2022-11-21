import Header from "../common/header";
import styled from "styled-components";
import { MainImg, SearchFont, SortArrow } from "../../assets/img";
import auth from "../../apis/auth/auth";
import { useEffect, useState } from "react";
import { searchProject, projectType } from "../../apis/project/Search";
import { ProjectItem } from "../ProjectItem";

interface searchProjectStateType {
  order: string;
  name: string;
}

const Main = () => {
  const [projectList, setProjectList] = useState<projectType[] | null>(null);
  const [searchProjectState, setSearchProjectState] =
    useState<searchProjectStateType>({ order: "RECOMMEND", name: "" });
  const urlParam = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    if (urlParam) {
      auth(urlParam).then((res) => {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        localStorage.setItem("code", urlParam);
        window.location.replace("/");
      });
    }
  }, [urlParam]);

  useEffect(() => {
    searchProject(searchProjectState)
      .then((res) => setProjectList(res.projects))
      .catch((err) => console.log(err));
  }, [searchProjectState]);

  return (
    <>
      <Header />
      <MainImgContainer>
        <MainImgFont>
          프로젝트 비용 걱정 그만하고 일단 하세요.
          <MainImgHelp>
            저희가 도와줄게요<WhiteFont>, MARADI</WhiteFont>
          </MainImgHelp>
        </MainImgFont>
      </MainImgContainer>
      <SearchBarArea>
        <SearchWrapper>
          <SelectStyle
            onChange={({ target }) =>
              setSearchProjectState({
                ...searchProjectState,
                order: target.value,
              })
            }
          >
            <option value="RECOMMEND">추천순</option>
            <option value="POPULARITY">인기순</option>
          </SelectStyle>
          <InputWrapper>
            <SearchBarInput
              type="text"
              autoComplete="off"
              placeholder="찾으시는 프로젝트가 있나요?"
              onChange={({ target }) =>
                setSearchProjectState({
                  ...searchProjectState,
                  name: target.value,
                })
              }
            />
            <SearchFontTag src={SearchFont} />
          </InputWrapper>
        </SearchWrapper>
      </SearchBarArea>
      <ListWrapper>
        {projectList &&
          projectList.map((e) => (
            <ProjectItem
              key={e.id}
              id={e.id}
              name={e.name}
              content={e.content}
              date={e.date}
              target_funding_amount={e.target_funding_amount}
              funding_amount={e.funding_amount}
            />
          ))}
      </ListWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  width: 700px;
  display: flex;
  border: 2px solid ${({ theme }) => theme.color.gray900};
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
`;

const MainImgContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${MainImg});
  background-size: cover;
`;

const MainImgFont = styled.b`
  width: 75%;
  font-weight: 400;
  font-size: 44px;
  line-height: 51px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.nanum};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const MainImgHelp = styled.b`
  color: ${({ theme }) => theme.color.main};
`;

const WhiteFont = styled.b`
  color: ${({ theme }) => theme.color.white};
`;

const SearchBarArea = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectStyle = styled.select`
  width: 170px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.color.gray900};
  border-radius: 4px;
  margin-right: 20px;
  text-align: center;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.arita};
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.mainblack};
  cursor: pointer;
  appearance: none;
  background: url(${SortArrow}) no-repeat right 15px center;
  padding-right: 10px;
`;

const SearchBarInput = styled.input`
  width: 500px;
  height: 24px;
  border-radius: 4px;
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.arita};
  ::placeholder {
    font-weight: 400;
    line-height: 24px;
  }
`;

const SearchFontTag = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px 80px;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;

export default Main;
