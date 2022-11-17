import styled from "styled-components";
import { HeadLogo, ProfileImg } from "../../../assets/img";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../../loginModal";
import NameList from "./nameList";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = "unset"), 1000);
    }
    if(localStorage.getItem("access_token") && localStorage.getItem("refresh_token")){
      setLogin(true);
    }
  }, [modal]);
  return (
    <>
      <HeaderContainer>
        <HeaderLogo to="/">
          <MainLogo src={HeadLogo} alt="헤더 로고" />
          <MainLogoFont>MARADI</MainLogoFont>
        </HeaderLogo>
        <HeaderItems>
          <ItemLink to="/hall">명예의 전당</ItemLink>
          <ItemLink to="/createProject">프로젝트</ItemLink>
          {!login ? (
            <Text onClick={() => setModal(true)}>
              <ItemLink to="">로그인</ItemLink>
              <span>/</span>
              <ItemLink to="">회원가입</ItemLink>
            </Text>
          ) : (
            <>
              <details>
                <ProfileWrapper>
                  <Profile src={ProfileImg} alt="프로필 이미지" />
                  <NameText>zㅣ존민성</NameText>
                </ProfileWrapper>
                <NameList setLogin={setLogin} />
              </details>
            </>
          )}
        </HeaderItems>
      </HeaderContainer>
      {modal && <LoginModal setModal={setModal} />}
    </>
  );
};

const ProfileWrapper = styled.summary`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;

const Text = styled.div`
  :hover {
    text-decoration: underline;
  }
`;

const NameText = styled.span`
  font-family: ${({ theme }) => theme.font.arita};
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 2;
  border-bottom: 1px solid #ededed;
`;

const HeaderItems = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLogo = styled.img`
  margin-right: 10px;
`;

const MainLogoFont = styled.strong`
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  :hover {
    text-decoration: underline;
  }
`;

const HeaderLogo = styled(Link)`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

export default Header;
