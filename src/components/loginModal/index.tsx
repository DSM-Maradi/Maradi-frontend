import styled, { keyframes } from "styled-components";
import {
  ModalBackgroundImg,
  Google,
  Facebook,
  Github,
  XButton,
} from "../../assets/img";
import { useRef } from "react";

interface PropsType {
  setModal: (modal: boolean) => void;
}

const LoginModal = ({ setModal }: PropsType) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const ClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      setModal(false);
    }
  };
  return (
    <ModalBackground ref={backgroundRef} onClick={ClickModal}>
      <ModalWrapper>
        <XImage
          src={XButton}
          onClick={() => {
            setModal(false);
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

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

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: grid;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  animation: ${(modal) => (modal ? fadeIn : fadeOut)} 1s;
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

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 10px;
  z-index: 3;
  animation: ${(modal) => (modal ? slideIn : slideOut)} 0.6s;
`;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  from {
      transform: translateY(0%);
  }
  to {
      transform: translateY(100%);
  }
`;

export default LoginModal;
