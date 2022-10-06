import styled from "styled-components";
import {
  ModalBackgroundImg,
  Google,
  Facebook,
  Github,
  XButton,
} from "../../assets/img";
import { useState } from "react";

interface PropsType {
  setModal: (modal: boolean) => void;
}

interface ModalProps {
  modalVisible: boolean;
}

const LoginModal = ({ setModal }: PropsType) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const ClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalVisible) {
      setModalVisible(false);
      setTimeout(() => {
        setModal(false);
      }, 600);
    }
  };
  return (
    <ModalBackground modalVisible={modalVisible} onClick={ClickModal}>
      <ModalWrapper
        modalVisible={modalVisible}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <XImage
          src={XButton}
          onClick={() => {
            if (modalVisible) {
              setModalVisible(false);
              setTimeout(() => {
                setModal(false);
              }, 600);
            }
          }}
          alt="Back Button"
        />
        <LoginText>소셜 계정으로 로그인</LoginText>
        <Wrapper>
          <OAuthImgWrapper>
            <Image src={Google} alt="Google OAuth" />
            <Image src={Github} alt="Github OAuth" />
            <Image src={Facebook} alt="Facebook OAuth" />
          </OAuthImgWrapper>
          <WelcomeText>환영합니다 !</WelcomeText>
        </Wrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

const XImage = styled.img`
  width: 15px;
  height: 15px;
  margin: 10px 10px 0 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  background-image: url("${ModalBackgroundImg}");
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LoginText = styled.span`
  width: 100%;
  height: 30%;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div<ModalProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: grid;
  place-content: center;

  @keyframes fadeIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @keyframes fadeOut {
    0% {
      background-color: rgba(0, 0, 0, 0.5);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  animation: ${(props) => (props.modalVisible ? "fadeIn" : "fadeOut")} 0.6s;
`;

const Image = styled.img`
  height: max-content;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
`;

const OAuthImgWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

const WelcomeText = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
`;

const ModalWrapper = styled.div<ModalProps>`
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 10px;
  z-index: 3;
  @keyframes slideIn {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(130%);
    }
  }

  animation: ${(props) => (props.modalVisible ? "slideIn" : "slideOut")} 0.6s;
`;

export default LoginModal;
