import styled from "styled-components";
import { Arrow } from "../../assets/img";
import { useState, useEffect, ChangeEvent } from "react";
import ProjectSubmitModal from "../projectsubmitmodal";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { information } from "../../modules/recoil/atom";

export interface InputType {
  titles: string;
  contents: string;
}

const CreateProject = () => {
  const nav = useNavigate();
  const useInformation = useRecoilValue(information);
  console.log(useInformation);
  const [input, setInputs] = useState<InputType>({
    titles: useInformation.title,
    contents: useInformation.content,
  });
  const [modal, setModal] = useState<boolean>(false);
  const { titles, contents }: InputType = input;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...input,
      [name]: value,
    });
  };
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = "unset"), 1000);
    }
  }, [modal]);
  return (
    <>
      <MainContainer>
        {modal && (
          <ProjectSubmitModal
            image_url={useInformation.image_url}
            image_description={useInformation.image_description}
            input={input}
            setModal={setModal}
          />
        )}
        <WriteContainer>
          <div>
            <WriteTitle
              placeholder="제목을 입력해주세요"
              onChange={onChange}
              name="titles"
              value={titles}
            />
            <WriteContents
              onChange={onChange}
              placeholder="내용을 입력해주세요"
              name="contents"
              value={contents}
            />
          </div>
          <InterfaceBar>
            <BackButton onClick={() => nav(-1)}>
              <img src={Arrow} alt="뒤로가기 화살표" />
              <BackBtnSpan>뒤로가기</BackBtnSpan>
            </BackButton>
            <ButtonWrapper>
              <Button onClick={() => setModal(true)}>
                <ButtonSpan>업로드 하기</ButtonSpan>
              </Button>
            </ButtonWrapper>
          </InterfaceBar>
        </WriteContainer>
        <PostWriteContainer>
          <PostWrite>
            <PostWriteTitle>{titles}</PostWriteTitle>
            <PostWriteContent>
              {contents.split("\n").map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </PostWriteContent>
          </PostWrite>
        </PostWriteContainer>
      </MainContainer>
    </>
  );
};

const Button = styled.div`
  width: max-content;
  height: 48px;
  padding: 14px 18px;
  margin: 0 10px;
  background: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color.darkmain};
  }
`;

const ButtonWrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: space-around;
`;

const BackButton = styled.div`
  width: max-content;
  height: 48px;
  border-radius: 10px;
  padding: 10px 30px 10px 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color.gray500};
  }
`;

const BackBtnSpan = styled.span`
  margin-top: 2px;
  margin-left: 5px;
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const WriteContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WriteTitle = styled.input`
  width: 591px;
  display: block;
  margin: 76px 0px 55px 61px;
  font-size: 30px;
  ::placeholder {
    font-family: ${({ theme }) => theme.font.noto};
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const WriteContents = styled.textarea`
  width: 90%;
  height: 600px;
  display: block;
  border: none;
  resize: none;
  font-size: 20px;
  margin-left: 61px;
  outline: none;
  font-family: ${({ theme }) => theme.font.noto};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const PostWriteContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostWrite = styled.div`
  width: 80%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const PostWriteTitle = styled.h2`
  margin-bottom: 10px;
  word-break: break-all;
`;

const PostWriteContent = styled.span`
  font-size: 20px;
  word-break: break-all;
`;

const InterfaceBar = styled.div`
  width: 100%;
  height: 74px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
`;

const ButtonSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;
`;

export default CreateProject;
