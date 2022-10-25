import styled from "styled-components";
import { ImgUpload, XButton } from "../../assets/img";

interface PropsType {
  setModal: (modal: boolean) => void;
}

const ProjectSubmitModal = ({ setModal }: PropsType) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <XBtn src={XButton} onClick={() => setModal(false)}></XBtn>
        <ImgBlock>
          <ImgUploadContainer htmlFor="input-file">
            <UploadImg src={ImgUpload} />
            <UploadFont>이미지를 업로드 해주세요</UploadFont>
            <FileSelector
              type="file"
              id="input-file"
              accept="image/jpg, image/png, image/jpeg"
            />
          </ImgUploadContainer>

          <UploadTextarea placeholder="간단한 설명을 작성해주세요." />
        </ImgBlock>
        <PostForm onClick={() => setModal(false)}>
          <PostFormSpan>제출하기</PostFormSpan>
        </PostForm>
      </ModalWrapper>
    </ModalContainer>
  );
};

const PostForm = styled.form`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 14px 18px;
  margin: 10px;

  width: 92px;
  height: 48px;
  background: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;

  float: right;
`;

const PostFormSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;
`;

const XBtn = styled.img`
  float: right;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: 10px;
`;

const FileSelector = styled.input`
  width: 165px;
  height: 120px;
  display: none;
`;

const ImgBlock = styled.div`
  display: flex;
  margin-top: 60px;
`;
const UploadTextarea = styled.textarea`
  width: 297px;
  height: 120px;
  font-size: 12px;
  border-radius: 8px;
  resize: none;
  padding: 20px 20px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.color.gray100};
  ::placeholder {
    font-size: 12px;
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
  background-color: ${({ theme }) => theme.color.white};
  align-items: center;
  z-index: 3;

  span {
    color: ${({ theme }) => theme.color.white};
    font-size: 15px;
  }
`;

const ImgUploadContainer = styled.label`
  display: flex;
  width: 165px;
  height: 120px;
  cursor: pointer;
  margin-left: 30px;
  border-radius: 3.75px;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray300};
  justify-content: center;
  align-items: center;
`;

const UploadImg = styled.img`
  margin-bottom: 10px;
`;
const UploadFont = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 7.5px;
`;

export default ProjectSubmitModal;
