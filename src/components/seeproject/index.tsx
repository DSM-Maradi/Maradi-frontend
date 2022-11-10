import styled from "styled-components";
import Header from "../common/header";
import React, { useState } from "react";
import {
  RoundProfileImg,
  CommentImg,
  Like,
  Share,
  ThreeDot,
} from "../../assets/img";

function SeeProject() {
  const dummyData: { id: number; name: string; value: string }[] = [
    {
      id: 1,
      name: "조상현",
      value:
        "에휴 이준서 병신 이따구로 글 쓰면 누가 읽어줄 주 아나 ㅉㅉ 그냥 죽어라 죽어 너같은 새끼들때문에 세상이 망하는거임 에휴 이준서 병신 이따구로 글 쓰면 누 가 읽어줄 주 아나 ㅉㅉ 그냥 죽어라 죽어너같은 새끼들때문에 세상이 망하는거임",
    },
    {
      id: 2,
      name: "조상현",
      value:
        "에휴 이준서 병신 이따구로 글 쓰면 누가 읽어줄 주 아나 ㅉㅉ 그냥 죽어라 죽어 너같은 새끼들때문에 세상이 망하는거임 에휴 이준서 병신 이따구로 글 쓰면 누 가 읽어줄 주 아나 ㅉㅉ 그냥 죽어라 죽어너같은 새끼들때문에 세상이 망하는거임",
    },
    {
      id: 3,
      name: "조상현",
      value:
        "에휴 이준서 병신 이따구로 글 쓰면 누가 읽어줄 주 아나 ㅉㅉ 그냥 죽어라 죽어 너같은 새끼들때문에 세상이 망하는거임 에휴 이준서 병신 이따구로 글 쓰면 누 가 읽어줄 주 아나 ㅉㅉ 그냥 죽어라 죽어너같은 새끼들때문에 세상이 망하는거임",
    },
  ];
  const [change, setChange] = useState({
    click: false,
    money: 0,
  });
  const { click, money } = change;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const money = Number(e.target.value);
    setChange({
      click: click,
      money: money,
    });
  };

  const onFunding = () => {
    setChange({
      click: !click,
      money: money,
    });
    if (click === true && money !== 0) {
      alert(`${money}원을 후원을 진행하시겠습니까?`);
      setChange({
        click: !click,
        money: 0,
      });
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <MainContainer>
          <ProjectTitle>이태원에서 일어난 끔찍한 사건</ProjectTitle>
          <Line1 />
          <SideBar>
            <LikeImg>
              <img src={Like} alt="좋아요" />
              <LikeNum>10</LikeNum>
            </LikeImg>
            <SideBarHr />
            <ShareImg src={Share} alt="공유 이미지" />
          </SideBar>
          <ProjectContents>
            윤희근 경찰청장은 “사고가 발생하기 직전 현장의 심각성을 알리는 112
            신고가 다수 있었지만 현장의 대응은 미흡했다”며 경찰청에 독립적인
            특별기구를 꾸려 현장 대응이 적절했는지 조사하겠다고 밝혔다. 윤
            청장은 1일 서울 서대문구 경찰청에서 ‘이태원 사고 관련 경찰청장
            브리핑’을 열어 “사고가 발생하기 직전에 현장의 심각성을 알리는 112
            신고가 다수 있었던 것을 확인했다. 신고 내용을 보면 사고 발 생
            이전부터 많은 군중이 몰려 사고의 위험성을 알리는 급박한 내용”이라며
            “그럼에도 불구하고 112신고를 처리하는 현장의 대응은 미흡했다는
            판단을 했다”고 말했다. 또한 “경찰은 이번 사건의 진상을 명확히 밝히고
            책임을 규명하기 위해 모든 부분에 대해 예외없이 강도 높은 감찰과
            수사를 신속하고 엄밀하게 진행하겠다”며 “오늘부터 경찰청에 독립적인
            특별기구를 설치해 투명하고 엄정하게 사안의 진상을 밝히겠다”고 했다.
            또 재발방지 대책 마련에도 나서겠다고 강조했다. 윤 청장은 “향후
            범정부 차원의 재발방지 대책 논의에도 적극 참여해 다시는 이러한
            사고가 반복되지 않도록 경찰의 역할과 책임을 다하겠다”고 말했다.
            윤희근 경찰청장은 “사고가 발생하기 직전 현장의 심각성을 알리는 112
            신고가 다수 있었지만 현장의 대응은 미흡했다”며 경찰청에 독립적인
            특별기구를 꾸려 현장 대응이 적절했는지 조사하겠다고 밝혔다. 윤
            청장은 1일 서울 서대문구 경찰청에서 ‘이태원 사고 관련 경찰청장
            브리핑’을 열어 “사고가 발생하기 직전에 현장의 심각성을 알리는 112
            신고가 다수 있었던 것을 확인했다. 신고 내용을 보면 사고 발 생
            이전부터 많은 군중이 몰려 사고의 위험성을 알리는 급박한 내용”이라며
            “그럼에도 불구하고 112신고를 처리하는 현장의 대응은 미흡했다는
            판단을 했다”고 말했다. 또한 “경찰은 이번 사건의 진상을 명확히 밝히고
            책임을 규명하기 위해 모든 부분에 대해 예외없이 강도 높은 감찰과
            수사를 신속하고 엄밀하게 진행하겠다”며 “오늘부터 경찰청에 독립적인
            특별기구를 설치해 투명하고 엄정하게 사안의 진상을 밝히겠다”고 했다.
            또 재발방지 대책 마련에도 나서겠다고 강조했다. 윤 청장은 “향후
            범정부 차원의 재발방지 대책 논의에도 적극 참여해 다시는 이러한
            사고가 반복되지 않도록 경찰의 역할과 책임을 다하겠다”고 말했다.
            윤희근 경찰청장은 “사고가 발생하기 직전 현장의 심각성을 알리는 112
            신고가 다수 있었지만 현장의 대응은 미흡했다”며 경찰청에 독립적인
            특별기구를 꾸려 현장 대응이 적절했는지 조사하겠다고 밝혔다. 윤
            청장은 1일 서울 서대문구 경찰청에서 ‘이태원 사고 관련 경찰청장
            브리핑’을 열어 “사고가 발생하기 직전에 현장의 심각성을 알리는 112
            신고가 다수 있었던 것을 확인했다. 신고 내용을 보면 사고 발 생
            이전부터 많은 군중이 몰려 사고의 위험성을 알리는 급박한 내용”이라며
            “그럼에도 불구하고 112신고를 처리하는 현장의 대응은 미흡했다는
            판단을 했다”고 말했다. 또한 “경찰은 이번 사건의 진상을 명확히 밝히고
            책임을 규명하기 위해 모든 부분에 대해 예외없이 강도 높은 감찰과
            수사를 신속하고 엄밀하게 진행하겠다”며 “오늘부터 경찰청에 독립적인
            특별기구를 설치해 투명하고 엄정하게 사안의 진상을 밝히겠다”고 했다.
            또 재발방지 대책 마련에도 나서겠다고 강조했다. 윤 청장은 “향후
            범정부 차원의 재발방지 대책 논의에도 적극 참여해 다시는 이러한
            사고가 반복되지 않도록 경찰의 역할과 책임을 다하겠다”고 말했다.
            윤희근 경찰청장은 “사고가 발생하기 직전 현장의 심각성을 알리는 112
            신고가 다수 있었지만 현장의 대응은 미흡했다”며 경찰청에 독립적인
            특별기구를 꾸려 현장 대응이 적절했는지 조사하겠다고 밝혔다. 윤
            청장은 1일 서울 서대문구 경찰청에서 ‘이태원 사고 관련 경찰청장
            브리핑’을 열어 “사고가 발생하기 직전에 현장의 심각성을 알리는 112
            신고가 다수 있었던 것을 확인했다. 신고 내용을 보면 사고 발 생
            이전부터 많은 군중이 몰려 사고의 위험성을 알리는 급박한 내용”이라며
            “그럼에도 불구하고 112신고를 처리하는 현장의 대응은 미흡했다는
            판단을 했다”고 말했다. 또한 “경찰은 이번 사건의 진상을 명확히 밝히고
            책임을 규명하기 위해 모든 부분에 대해 예외없이 강도 높은 감찰과
            수사를 신속하고 엄밀하게 진행하겠다”며 “오늘부터 경찰청에 독립적인
            특별기구를 설치해 투명하고 엄정하게 사안의 진상을 밝히겠다”고 했다.
            또 재발방지 대책 마련에도 나서겠다고 강조했다. 윤 청장은 “향후
            범정부 차원의 재발방지 대책 논의에도 적극 참여해 다시는 이러한
            사고가 반복되지 않도록 경찰의 역할과 책임을 다하겠다”고 말했다.
            윤희근 경찰청장은 “사고가 발생하기 직전 현장의 심각성을 알리는 112
            신고가 다수 있었지만 현장의 대응은 미흡했다”며 경찰청에 독립적인
            특별기구를 꾸려 현장 대응이 적절했는지 조사하겠다고 밝혔다. 윤
            청장은 1일 서울 서대문구 경찰청에서 ‘이태원 사고 관련 경찰청장
            브리핑’을 열어 “사고가 발생하기 직전에 현장의 심각성을 알리는 112
            신고가 다수 있었던 것을 확인했다. 신고 내용을 보면 사고 발 생
            이전부터 많은 군중이 몰려 사고의 위험성을 알리는 급박한 내용”이라며
            “그럼에도 불구하고 112신고를 처리하는 현장의 대응은 미흡했다는
            판단을 했다”고 말했다. 또한 “경찰은 이번 사건의 진상을 명확히 밝히고
            책임을 규명하기 위해 모든 부분에 대해 예외없이 강도 높은 감찰과
            수사를 신속하고 엄밀하게 진행하겠다”며 “오늘부터 경찰청에 독립적인
            특별기구를 설치해 투명하고 엄정하게 사안의 진상을 밝히겠다”고 했다.
            또 재발방지 대책 마련에도 나서겠다고 강조했다. 윤 청장은 “향후
            범정부 차원의 재발방지 대책 논의에도 적극 참여해 다시는 이러한
            사고가 반복되지 않도록 경찰의 역할과 책임을 다하겠다”고 말했다.
          </ProjectContents>
          <FundingProfileContainer>
            <img src={RoundProfileImg} alt="프로필" />
            <NameAndBtn>
              <UserName>조상현 닮은 앵무새</UserName>
              {click === false ? (
                <FundingBtn onClick={onFunding}>펀딩하기</FundingBtn>
              ) : (
                <FundingInputContainer>
                  <FundingInput
                    onChange={onChange}
                    type="number"
                    placeholder="얼마를 펀딩하시겠어요?"
                  />
                  <FundingBtn2 onClick={onFunding}>펀딩하기</FundingBtn2>
                </FundingInputContainer>
              )}
            </NameAndBtn>
          </FundingProfileContainer>
        </MainContainer>
        <Line2 />
        <PostCommentContainer>
          <PostCommentInput placeholder="프로젝트에 대한 여러 평가들을 작성해주세요." />
          <CommentSubmitBtn>
            <img src={CommentImg} alt="댓글 이미지" />
            댓글작성
          </CommentSubmitBtn>
        </PostCommentContainer>
        <CommentItemContainer>
          {dummyData.map((v, i) => (
            <CommentWrapper key={i}>
              <ImgWrapper>
                <details>
                  <SummaryWrapper>
                    <ThreeDotImage src={ThreeDot} />
                  </SummaryWrapper>
                  <DeleteButton>댓글 삭제하기</DeleteButton>
                </details>
              </ImgWrapper>
              <CommentItem>
                <CommentUserName>{v.name}</CommentUserName>
                <CommentContents>{v.value}</CommentContents>
              </CommentItem>
            </CommentWrapper>
          ))}
        </CommentItemContainer>
      </Wrapper>
    </>
  );
}

const DeleteButton = styled.button`
  position: absolute;
  background: #ffffff;
  border: 1px solid #b6b6b6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 15px 20px;
  color: ${({ theme }) => theme.color.error};
  font-family: ${({ theme }) => theme.font.arita};
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transform: translate(-100px, 0);
  :hover {
    background: ${({ theme }) => theme.color.error};
    color: ${({ theme }) => theme.color.white};
    border: none;
  }
`;

const SummaryWrapper = styled.summary`
  display: flex;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ThreeDotImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const CommentWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.body`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
`;

const MainContainer = styled.div`
  width: 821px;
`;

const ProjectTitle = styled.h1`
  font-size: 32px;
`;

const Line1 = styled.hr`
  width: 266px;
  border: solid 1px #ffc700;
  margin: 34px 0px 90px 0px;
`;

const Line2 = styled.hr`
  width: 700px;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  margin-top: 150px;
  margin-bottom: -120px;
`;

const ProjectContents = styled.div`
  width: 821px;
  font-size: 16px;
  word-break: break-all;
`;

const FundingProfileContainer = styled.div`
  width: 821px;
  display: flex;
  align-items: center;
  margin-top: 102px;
`;

const UserName = styled.b`
  font-size: 20px;
  display: block;
  margin-bottom: 17px;
`;

const NameAndBtn = styled.div`
  margin-left: 26px;
`;

const FundingBtn = styled.button`
  width: 147px;
  height: 39px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.main};
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.main};

    &:active {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.main};
    }
  }
`;

const FundingBtn2 = styled.button`
  width: 105px;
  height: 49px;
  border: solid ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.error};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.color.error};
    color: ${({ theme }) => theme.color.white};
  }
  &:active {
    color: ${({ theme }) => theme.color.error};
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const FundingInputContainer = styled.div`
  width: 523px;
  height: 49px;
  display: flex;
  gap: 10px;
`;

const FundingInput = styled.input`
  width: 408px;
  height: 100%;
  border: solid black;
  border-radius: 8px;
  padding-left: 23px;
`;

const PostCommentContainer = styled.form`
  margin-top: 175px;
  width: 616px;
  flex-direction: column;
  margin-bottom: 90px;
`;

const PostCommentInput = styled.textarea`
  width: 616px;
  height: 189px;
  resize: none;
  outline: none;
  padding: 26px 20px;
  border-radius: 8px;
  border: solid ${({ theme }) => theme.color.gray700};
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
  }
`;

const CommentSubmitBtn = styled.form`
  width: 120px;
  height: 40px;
  border: solid ${({ theme }) => theme.color.main};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 8px;
  float: right;
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => theme.color.main};
  }
`;

const CommentItemContainer = styled.div`
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentItem = styled.div`
  width: 100%;
  height: 70px;
  justify-content: center;
  display: flex;
  gap: 30px;
  border-bottom: solid 1px ${({ theme }) => theme.color.darkmain};
  margin-bottom: 50px;
`;

const CommentUserName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

const CommentContents = styled.div`
  font-size: 16px;
  width: 513px;
  float: right;
`;

const SideBar = styled.div`
  width: 80px;
  height: 180px;
  border-radius: 100px;
  background: ${({ theme }) => theme.color.point};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  left: 80%;
  flex-direction: column;
`;
const SideBarHr = styled.hr`
  position: absolute;
  top: 55%;
  width: 100%;
  border: solid white;
`;

const LikeImg = styled.div`
  position: absolute;
  top: 10%;
  flex-direction: column;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LikeNum = styled.b`
  margin-top: 5px;
  color: ${({ theme }) => theme.color.white};
`;

const ShareImg = styled.img`
  position: absolute;
  top: 65%;
  cursor: pointer;
`;

export default SeeProject;
