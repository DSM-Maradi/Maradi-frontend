import styled from "styled-components";
import { HeadLogo } from "../../../assets/img";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../../loginModal";
import NameList from "./nameList";
import { myprofile, myProfileType } from "../../../apis/header";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [user, setUser] = useState<myProfileType | null>(null);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = "unset"), 1000);
    }
  }, [modal]);
  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("refresh_token")
    ) {
      setLogin(true);
    }
    if (login) {
      myprofile()
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, [login]);
  return (
    <>
      <HeaderContainer>
        <HeaderLogo to="/">
          <MainLogo src={HeadLogo} alt="헤더 로고" />
          <MainLogoFont>MARADI</MainLogoFont>
        </HeaderLogo>
        <HeaderItems>
          <ItemLink to="/hall">명예의 전당</ItemLink>
          <ItemLink to="/createProject">프로젝트 생성</ItemLink>
          {!login ? (
            <Text onClick={() => setModal(true)}>
              <ItemLink to="">로그인/회원가입</ItemLink>
            </Text>
          ) : (
            <>
              <details>
                <ProfileWrapper>
                  <Profile src={user?.profile_image} alt="프로필 이미지" />
                  <NameText>{user?.name}</NameText>
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
  cursor: pointer;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 100px;
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
  height: 60px;
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
