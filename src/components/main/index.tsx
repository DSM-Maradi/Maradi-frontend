import Header from "../common/header";
import styled from "styled-components";
import { mainImg, searchFont, listImg } from "../../assets/img";

const MainStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const MainImg = styled.img`
  width: 100%;
  position: absolute;
`;

const MainImgContainer = styled.div`
  width: 100%;
  height: 700px;
  padding-bottom: 20px;
`;

const MainImgFont = styled.b`
  position: absolute;
  right: 35%;
  bottom: 40%;
  font-size: 45px;
  font-weight: lighter;
  color: white;
  z-index: 1;
`;

const SearchBarArea = styled.div`
  width: 100%;
  height: 300px;
`;

const SearchBarContainer = styled.div`
  position: absolute;
  direction: row;
  left: 30%;
  padding-top: 80px;
`;

const SelectStyle = styled.select`
  border: solid black;
  padding: 9px 10px 9px 10px;
  border-radius: 4px;
`;

const SearchBarInput = styled.input`
  width: 500px;
  margin-left: 20px;
  border: solid black;
  padding: 10px 10px 10px 15px;
  border-radius: 4px;
`;

const SearchFont = styled.img`
  position: absolute;
  font-size: 24px;
  z-index: 1;
  left: 93%;
  bottom: 6%;
`;

const ListContainer = styled.ul`
  display: flex;
  position: absolute;
  width: 100%;
  list-style: none;
  justify-content: space-around;
  flex-flow: wrap;
`;
const ListItems = styled.li`
  width: 500px;
  height: 400px;
  margin-bottom: 50px;
  border-radius: 12px;
  direction: row;
  box-shadow: 3px 3px 5px 3px #b6b6b6;
`;

const ListImg = styled.img`
  width: 500px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const ListTitle = styled.h3`
  padding: 10px 0px 5px 25px;
`;

const ListContents = styled.div`
  padding: 10px 0px 5px 25px;
`;

const Main = () => {
  return (
    <MainStyle>
      <Header />
      <MainImgContainer>
        <MainImg src={mainImg}></MainImg>
        <MainImgFont>
          프로젝트 비용 걱정 그만하고 일단 하세요{" "}
          <div style={{ fontWeight: "400" }}>
            <b style={{ color: "#3faf0d" }}>저희가 도와줄게요</b>, MARADI
          </div>
        </MainImgFont>
      </MainImgContainer>
      <SearchBarArea>
        <SearchBarContainer>
          <SelectStyle name="" id="">
            <option value="">정렬순서</option>
            <option value="">추천순</option>
            <option value="">인기순</option>
          </SelectStyle>

          <SearchBarInput
            type="text"
            placeholder="찾으시는 프로젝트가 있나요?"
          ></SearchBarInput>
          <SearchFont src={searchFont} />
        </SearchBarContainer>
      </SearchBarArea>
      <ListContainer>
        <ListItems>
          <ListImg src={listImg} />
          <ListTitle>제목</ListTitle>
          <ListContents>내용</ListContents>
        </ListItems>
        <ListItems>
          <ListImg src={listImg} />
          <ListTitle>제목</ListTitle>
          <ListContents>내용</ListContents>
        </ListItems>
        <ListItems>
          <ListImg src={listImg} />
          <ListTitle>제목</ListTitle>
          <ListContents>내용</ListContents>
        </ListItems>
        <ListItems>
          <ListImg src={listImg} />
          <ListTitle>제목</ListTitle>
          <ListContents>내용</ListContents>
        </ListItems>
      </ListContainer>
    </MainStyle>
  );
};

export default Main;
