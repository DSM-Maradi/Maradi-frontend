import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { uploadImage } from "../../apis/image";
import { createProject } from "../../apis/project/Create";
import { ImgUpload, XButton } from "../../assets/img";
import { customToast } from "../../utils/Toast";
import { InputType } from "../createproject";

interface PropsType {
  setModal: (modal: boolean) => void;
  input: InputType;
}

interface UploadProps {
  file: File;
  thumbnail: string;
  type: string;
}

const ProjectSubmitModal = ({ setModal, input }: PropsType) => {
  const [image, setImage] = useState<UploadProps | null>();
  const [simpleIntroduce, setSimpleIntroduce] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fundingValue, setFundingValue] = useState<number>();
  const RefValue = useRef<HTMLInputElement>(null);
  const onClick = () => {
    setModal(false);
  };
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const formData = new FormData();
    if (fileList && fileList[0]) {
      formData.append("file", fileList[0]);
      uploadImage(formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      const url: string = URL.createObjectURL(fileList[0]);
      setImage({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };
  const showImage = useMemo(() => {
    if (!image && image === undefined) {
      return (
        <>
          <UploadImg src={ImgUpload} alt="이미지 업로드 사진" />
          <UploadFont>이미지를 업로드 해주세요</UploadFont>
        </>
      );
    }
    return <Image src={image?.thumbnail} alt={image?.type} />;
  }, [image]);

  const navigate = useNavigate();
  return (
    <ModalContainer onClick={onClick}>
      <ModalWrapper
        onClick={(e: React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
      >
        <XWrapper>
          <XBtn src={XButton} onClick={onClick}></XBtn>
        </XWrapper>
        <ImgBlock>
          <ImgUploadContainer htmlFor="input-file">
            {showImage}
            <FileSelector
              ref={RefValue}
              type="file"
              id="input-file"
              accept="image/*"
              onChange={onChange}
              onClick={() => RefValue.current?.click()}
            />
          </ImgUploadContainer>
          <UploadTextarea
            value={simpleIntroduce}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setSimpleIntroduce(e.target.value)
            }
            placeholder="간단한 설명을 작성해주세요."
          />
        </ImgBlock>
        <FundingWrapper>
          <TargetMoneyTitle>목표 금액</TargetMoneyTitle>
          <FundingInputBlock>
            <FundingInput
              value={fundingValue}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFundingValue(Number(e.target.value));
              }}
              placeholder="목표 금액을 입력하세요."
            />
          </FundingInputBlock>
        </FundingWrapper>
        <PostFormWrapper>
          <PostForm
            onClick={() => {
              createProject({
                title: input.title,
                content: input.content,
                image_description: simpleIntroduce,
                image_url: imageUrl,
              })
                .then(() => {
                  navigate("/");
                  customToast("성공적으로 작성했습니다", "success");
                })
                .catch((err) => console.error(err));
            }}
          >
            <PostFormSpan>제출하기</PostFormSpan>
          </PostForm>
        </PostFormWrapper>
      </ModalWrapper>
    </ModalContainer>
  );
};

const FundingInputBlock = styled.div`
  width: 300px;
  height: 40px;
  background: ${({ theme }) => theme.color.gray100};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const FundingInput = styled.input`
  width: 298px;
  height: 50%;
  padding: 0 10px;
  background: none;
  font-family: ${({ theme }) => theme.font.noto};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray900};
  }
`;

const FundingWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TargetMoneyTitle = styled.span`
  width: 165px;
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 165px;
  height: 120px;
`;

const PostFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const XWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const PostForm = styled.div`
  width: 92px;
  height: 48px;
  padding: 14px 18px;
  margin: 10px;
  background: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
`;

const PostFormSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;
`;

const XBtn = styled.img`
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
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: ${({ theme }) => theme.color.black};
`;
const UploadTextarea = styled.textarea`
  width: 300px;
  height: 120px;
  font-size: 12px;
  border-radius: 8px;
  resize: none;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.color.gray100};
  font-family: ${({ theme }) => theme.font.noto};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray900};
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
const ModalWrapper = styled.form`
  width: 550px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 3;
`;

const ImgUploadContainer = styled.label`
  display: flex;
  width: 165px;
  height: 120px;
  cursor: pointer;
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
