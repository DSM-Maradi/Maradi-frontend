import Header from "../common/header";
import styled from "styled-components";
import { MainImg, SearchFont, ListImg, SortArrow } from "../../assets/img";
import { ProjectList } from "../../constance/projectlist";
import { useState, useEffect } from "react";
import LoginModal from "../loginModal";

const Main = () => {
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = "unset"), 1000);
    }
  }, [modal]);

  return (
    <>
      <Header setModal={setModal} />
      {modal && <LoginModal setModal={setModal} />}
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
          <SelectStyle>
            <option value="">정렬순서</option>
            <option value="">추천순</option>
            <option value="">인기순</option>
          </SelectStyle>
          <InputWrapper>
            <SearchBarInput
              type="text"
              autoComplete="off"
              placeholder="찾으시는 프로젝트가 있나요?"
            />
            <SearchFontTag src={SearchFont} />
          </InputWrapper>
        </SearchWrapper>
      </SearchBarArea>
      <ListWrapper>
        <ListContainer>
          {ProjectList.map((e) => (
            <ListItems key={e.id}>
              <ListImgTag src={ListImg} alt="리스트 이미지" />
              <TitleWrapper>
                <h3>{e.title}</h3>
                <ListContents>{e.text}</ListContents>
              </TitleWrapper>
              <ListBottom>
                <RegisterDate>등록날짜 | {e.date}</RegisterDate>
                <Money>
                  {e.goalMoney}원 / {e.nowMoney}원
                </Money>
              </ListBottom>
            </ListItems>
          ))}
        </ListContainer>
      </ListWrapper>
    </>
  );
};

const MainImgContainer = styled.div`
  width: 100%;
  height: 800px;
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

const ListContainer = styled.ul`
  width: 80%;
  display: flex;
  list-style: none;
  flex-flow: wrap;
  justify-content: center;
`;

const ListItems = styled.li`
  width: 500px;
  height: 400px;
  margin: 0 40px 5% 0;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 3px #b6b6b6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListImgTag = styled.img`
  width: 500px;
  border-radius: 12px 12px 0 0;
`;

const ListContents = styled.div`
  color: ${({ theme }) => theme.color.gray900};
`;

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

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const RegisterDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.arita};
  line-height: 14px;
  color: ${({ theme }) => theme.color.gray700};
  display: flex;
  flex-direction: column-reverse;
`;

const Money = styled.span`
  color: ${({ theme }) => theme.color.darkmain};
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.arita};
`;

const TitleWrapper = styled.div`
  padding: 0 20px 0 20px;
`;

export default Main;
