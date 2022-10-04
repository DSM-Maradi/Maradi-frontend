import styled from "styled-components";
import { ModalBackgroundImg, Google, Facebook, Github } from "../../assets/img";

const LoginModal = () => {
  return (
    <ModalBackground>
      <ModalWrapper>
        <LoginText>소셜 계정으로 로그인</LoginText>
        <div>
          <Image src={ModalBackgroundImg} alt="모달이미지" />
          <OAuthImgWrapper>
            <Image src={Google} alt="Google OAuth" />
            <Image src={Github} alt="Github OAuth" />
            <Image src={Facebook} alt="Facebook OAuth" />
          </OAuthImgWrapper>
          <WelcomeText>환영합니다 !</WelcomeText>
        </div>
      </ModalWrapper>
    </ModalBackground>
  );
};

const LoginText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  padding: 5% 0 5% 0;
`;

const ModalBackground = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Image = styled.img`
  height: max-content;
  margin-top: 20px;
  border-radius: 0 0 10px 10px;
`;

const OAuthImgWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 45%;
`;

const WelcomeText = styled.span`
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  position: absolute;
  top: 65%;
  left: 45%;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
`;

export default LoginModal;
