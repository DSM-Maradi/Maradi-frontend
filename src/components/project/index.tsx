import styled from "styled-components";
import { Arrow } from "../../assets/img";
import { useState } from "react";
import ProjectSubmitModal from "../projectsubmitmodal";

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const activeModal = () => {
    setShowModal((open) => !open);
  };
};

function CreateProject() {
  const [input, setInputs] = useState({
    title: "",
    content: "",
  });
  const [modal, setModal] = useState<boolean>(false);

  const { title, content } = input;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...input,
      [name]: value,
    });
  };

  const onSave = () => {
    //나중에 구현...
  };

  const onUpload = () => {
    //나중에 구현...
  };

  const revertPage = () => {
    //나중에 구현...
  };

  return (
    <>
      <MainContainer>
        <WriteContainer>
          {modal && <ProjectSubmitModal setModal={setModal} />}
          <input
            placeholder="제목을 입력해주세요"
            onChange={onChange}
            name="title"
            value={title}
          />
          <textarea
            onChange={onChange}
            placeholder="내용을 입력해주세요"
            name="content"
            value={content}
          />
          <InterfaceBar>
            <img src={Arrow} />
            <p>뒤로가기</p>
            <button id="saveButton">
              <span>임시저장</span>
            </button>
            <button onClick={() => setModal(true)} id="upLoadButton">
              <span>업로드 하기</span>
            </button>
          </InterfaceBar>
        </WriteContainer>
        <PostWriteContainer>
          <PostWrite>
            <h1>{title}</h1>
            <span>{content}</span>
          </PostWrite>
        </PostWriteContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const WriteContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  input {
    width: 591px;
    display: block;
    margin: 76px 0px 55px 61px;
    font-size: 30px;
    ::placeholder {
      font-family: "Noto Sans";
      font-style: normal;
      color: #b6b6b6;
    }
  }
  textarea {
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
      font-family: "Noto Sans";
      font-style: normal;
      color: #b6b6b6;
    }
  }
`;
const PostWriteContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostWrite = styled.div`
  width: 80%;
  height: 90%;
  h1 {
    margin-bottom: 10px;
  }
  span {
    font-size: 30px;
    word-break: break-all;
  }

  overflow-y: auto;
`;

const InterfaceBar = styled.div`
  position: absolute;
  width: 100%;
  height: 74px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  bottom: 0;
  p {
    padding-top: 4px;
    padding-left: 5px;
    width: 84px;
    height: 24px;
    cursor: pointer;
  }
  #saveButton {
    margin-left: 310px;
    padding: 14px 18px;
    width: 92px;
    height: 48px;
    background: #3eaf0e;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
    span {
      color: #ffffff;
      font-size: 15px;
    }
  }
  #upLoadButton {
    margin-left: 40px;
    padding: 14px 18px;
    width: 106px;
    height: 48px;
    background: #3eaf0e;
    border-radius: 5px;
    cursor: pointer;
    span {
      color: #ffffff;
      font-size: 15px;
    }
  }
  img {
    margin-left: 40px;
    cursor: pointer;
  }
`;

export default CreateProject;
