import styled from "styled-components";
import { ImgUpload, XButton } from "../../assets/img";

interface PropsType {
  setModal: (modal: boolean) => void;
}

const ProjectSubmitModal = ({ setModal }: PropsType) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <img src={XButton} onClick={() => setModal(false)}></img>
        <ImgBlock>
          <ImgUploadContainer>
            <img src={ImgUpload} />
            <p>이미지를 업로드 해주세요</p>
          </ImgUploadContainer>
          <textarea placeholder="간단한 설명을 작성해주세요." />
        </ImgBlock>
        <button>
          <span onClick={() => setModal(false)}>제출하기</span>
        </button>
      </ModalWrapper>
    </ModalContainer>
  );
};

const ImgBlock = styled.div`
  display: flex;
  margin-top: 60px;
  textarea {
    width: 297px;
    height: 120px;
    font-size: 12px;
    padding: 20px 20px;
    margin-left: 20px;
    background-color: #fbfbfb;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;
const ModalWrapper = styled.div`
  position: relative;
  width: 550px;
  height: 300px;
  text-align: center;
  background-color: white;
  align-items: center;
  z-index: 3;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 14px 18px;
    width: 92px;
    height: 48px;
    background: #3eaf0e;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;

    float: right;
    span {
      color: #ffffff;
      font-size: 15px;
    }
  }
  img {
    float: right;
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`;
const ImgUploadContainer = styled.div`
  display: flex;
  width: 165px;
  height: 120px;
  margin-left: 30px;
  border-radius: 3.75px;
  flex-direction: column;
  justify-content: center;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 10px;
  }
  p {
    color: #b6b6b6;
    font-size: 7.5px;
  }
`;

export default ProjectSubmitModal;
