import styled from "styled-components";
import { ModalBackgroundImg, Google, Facebook, Github } from "../../assets/img";

const LoginModal = () => {
  return (
    <ModalBackground>
      <ModalWrapper>
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
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Image = styled.img`
  height: max-content;
  border-radius: 0 0 10px 10px;
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
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export default LoginModal;
