import styled from "styled-components";
import Header from "../common/header";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CommentImg, Like, Share, ThreeDot, noLike } from "../../assets/img";
import { useParams } from "react-router-dom";
import {
  commentType,
  detailResponseType,
  projectDetail,
} from "../../apis/project/Detail";
import { createComment } from "../../apis/comment/Create";
import { patchLike } from "../../apis/Like";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { deletecomment } from "../../apis/comment/delete";
import { fundingProject } from "../../apis/funding";

function SeeProject() {
  const [change, setChange] = useState<{ click: boolean; money: number }>({
    click: false,
    money: 0,
  });
  const [commentState, setCommentState] = useState<string>("");
  const [commentValue, setCommentValue] = useState<commentType>();
  const { click, money } = change;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const money = Number(e.target.value);
    setChange({
      click: click,
      money: money,
    });
  };
  const id = useParams().id as string;
  const onFunding = () => {
    setChange({
      click: !click,
      money: money,
    });

    if (click && money !== 0) {
      alert(`${money}원을 후원을 진행하시겠습니까?`);
      setChange({
        click: !click,
        money: 0,
      });
      fundingProject(Number(id), money);
    }
  };

  const [detail, setDetail] = useState<detailResponseType | null>(null);
  const getProjectDatail = () => {
    projectDetail(id).then((res) => {
      setDetail(res);
    });
  };

  useEffect(() => {
    getProjectDatail();
  }, [detail]);

  return (
    <>
      <Header />
      {detail && (
        <Wrapper>
          <MainContainer>
            <ProjectTitle>{detail.title}</ProjectTitle>
            <Line1 />
            <SideBar>
              <LikeImg>
                <img
                  onClick={async () => {
                    await patchLike(id);
                    getProjectDatail();
                  }}
                  src={detail.is_liked ? noLike : Like}
                  alt="좋아요"
                />
                <LikeNum>{detail.like_count}</LikeNum>
              </LikeImg>
              <SideBarHr />
              <CopyToClipboard
                text={`http://localhost:3000/project/${id}`}
                onCopy={() => {
                  alert("복사완료");
                }}
              >
                <ShareImg src={Share} alt="공유 이미지" />
              </CopyToClipboard>
            </SideBar>
            <ProjectContents>
              {detail.content.split("\n").map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </ProjectContents>
            <FundingProfileContainer>
              <ProfileImage src={detail.profile_image} alt="프로필" />
              <NameAndBtn>
                <UserName>{detail.name}</UserName>
                {click === false ? (
                  <FundingBtn onClick={onFunding}>펀딩하기</FundingBtn>
                ) : (
                  <FundingInputContainer>
                    <FundingInput
                      onChange={onChange}
                      type="number"
                      placeholder="얼마를 펀딩하시겠어요?"
                      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        e.key === "Enter" ? onFunding() : null
                      }
                    />
                    <FundingBtn2 onClick={onFunding}>펀딩하기</FundingBtn2>
                  </FundingInputContainer>
                )}
              </NameAndBtn>
            </FundingProfileContainer>
          </MainContainer>
          <Line2 />
          <PostCommentContainer>
            <PostCommentInput
              onChange={({ target }) => setCommentState(target.value)}
              value={commentState}
              placeholder="프로젝트에 대한 여러 평가들을 작성해주세요."
            />
            <CommentSubmitBtn
              onClick={async () => {
                await createComment(commentState, id);
                setCommentState("");
                getProjectDatail();
              }}
            >
              <img src={CommentImg} alt="댓글 이미지" />
              댓글작성
            </CommentSubmitBtn>
          </PostCommentContainer>
          <CommentItemContainer>
            {detail.comment.map((v, i) => (
              <CommentWrapper key={i}>
                <ImgWrapper>
                  <details>
                    <SummaryWrapper>
                      <ThreeDotImage src={ThreeDot} />
                    </SummaryWrapper>
                    <DeleteButton
                      onClick={() =>
                        deletecomment(v.id).then(() => alert("댓글 삭제"))
                      }
                    >
                      댓글 삭제하기
                    </DeleteButton>
                  </details>
                </ImgWrapper>
                <CommentItem>
                  <CommentUserName>{v.name}</CommentUserName>
                  <CommentContents>
                    {v.content.split("\n").map((s, index) => (
                      <span key={index}>
                        {s}
                        <br />
                      </span>
                    ))}
                  </CommentContents>
                </CommentItem>
              </CommentWrapper>
            ))}
          </CommentItemContainer>
        </Wrapper>
      )}
    </>
  );
}

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

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
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CommentItem = styled.div`
  width: 100%;
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
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
