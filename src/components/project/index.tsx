import styled from "styled-components";
import { Arrow } from "../../assets/img";
import { ChangeEvent, useState } from "react";
import ProjectSubmitModal from "../projectsubmitmodal";

function CreateProject() {
  const [input, setInputs] = useState({
    title: "",
    content: "",
  });
  const [modal, setModal] = useState<boolean>(false);

  const { title, content } = input;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <MainContainer>
        {modal && <ProjectSubmitModal setModal={setModal} />}
        <WriteContainer>
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
          <InterfaceBar>
            <GoBackImg src={Arrow} />
            <GoBackFont>뒤로가기</GoBackFont>
            <SaveButton id="">
              <ButtonSpan>임시저장</ButtonSpan>
            </SaveButton>
            <UploadBtn onClick={() => setModal(true)} id="upLoadButton">
              <ButtonSpan>업로드 하기</ButtonSpan>
            </UploadBtn>
          </InterfaceBar>
        </WriteContainer>
        <PostWriteContainer>
          <PostWrite>
            <PostWriteTitle>{title}</PostWriteTitle>
            <PostWriteContent>{content}</PostWriteContent>
          </PostWrite>
        </PostWriteContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.form`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const WriteContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
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
  width: 591px;
  height: 500px;
  display: block;
  border: none;
  resize: none;
  font-size: 20px;
  margin-left: 61px;
  outline: none;
  ::placeholder {
    font-size: 20px;
    font-family: ${({ theme }) => theme.font.noto};
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
  overflow-y: auto;
`;

const PostWriteTitle = styled.h1`
  margin-bottom: 10px;
`;

const PostWriteContent = styled.span`
  font-size: 30px;
  word-break: break-all;
`;

const InterfaceBar = styled.div`
  position: absolute;
  width: 100%;
  height: 74px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  bottom: 0;
`;

const SaveButton = styled.button`
  margin-left: 350px;
  padding: 14px 18px;
  width: 92px;
  height: 48px;
  background: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
`;
const ButtonSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;
`;

const GoBackFont = styled.p`
  margin-left: 10px;
  cursor: pointer;
`;

const GoBackImg = styled.img`
  margin-left: 20px;
  cursor: pointer;
`;

const UploadBtn = styled.div`
  margin-left: 40px;
  padding: 14px 18px;
  width: 106px;
  height: 48px;
  background: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  cursor: pointer;
`;

export default CreateProject;
