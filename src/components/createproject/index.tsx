import styled from "styled-components";
import { Arrow } from "../../assets/img";
import { useState, useEffect } from "react";
import ProjectSubmitModal from "../projectsubmitmodal";
import { useNavigate } from "react-router-dom";

interface InputType {
  title: string;
  content: string;
}

const CreateProject = () => {
  const nav = useNavigate();
  const [input, setInputs] = useState<InputType>({
    title: "",
    content: "",
  });
  const [modal, setModal] = useState<boolean>(false);
  const { title, content }: InputType = input;
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setInputs({
      ...input,
      [name]: value,
    });
  };
  const upload = () => {
    if (!input.title || !input.content) {
      alert("내용을 다시 확인해주세요.");
      return;
    }
    setModal(true);
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
        {modal && <ProjectSubmitModal title={title} setModal={setModal} content={content} />}
        <WriteContainer>
          <div>
            <WriteTitle
              placeholder="제목을 입력해주세요"
              onChange={onChange}
              name="title"
              value={title}
            />
            <WriteContents
              onChange={onChange}
              placeholder="내용을 입력해주세요"
              name="content"
              value={content}
            />
          </div>
          <InterfaceBar>
            <BackButton onClick={() => nav(-1)}>
              <img src={Arrow} alt="뒤로가기 화살표" />
              <p>뒤로가기</p>
            </BackButton>
            <ButtonWrapper>
              <Button>
                <ButtonSpan>임시저장</ButtonSpan>
              </Button>
              <Button onClick={upload}>
                <ButtonSpan>업로드 하기</ButtonSpan>
              </Button>
            </ButtonWrapper>
          </InterfaceBar>
        </WriteContainer>
        <PostWriteContainer>
          <PostWrite>
            <PostWriteTitle>{title}</PostWriteTitle>
            <PostWriteContent>
              {content.split("\n").map((line: string, index: number) => (
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
  padding: 10px 30px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color.gray500};
  }
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
