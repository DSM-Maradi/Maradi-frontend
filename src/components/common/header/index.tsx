import styled from "styled-components";
import { HeadLogo } from "../../../assets/img";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../../loginModal";
import NameList from "./nameList";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(true);
  const [nameModal, setNameModal] = useState<boolean>(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = "unset"), 1000);
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
          <ItemLink to="">명예의 전당</ItemLink>
          <ItemLink to="">프로젝트</ItemLink>
          {!login ? (
            <div onClick={() => setModal(true)}>
              <ItemLink to="">로그인</ItemLink>/
              <ItemLink to="">회원가입</ItemLink>
            </div>
          ) : (
            <>
              <NameText onClick={() => setNameModal(!nameModal)}>
                zㅣ존민성
              </NameText>
              {nameModal && <NameList setLogin={setLogin} />}
            </>
          )}
        </HeaderItems>
      </HeaderContainer>
      {modal && <LoginModal setModal={setModal} />}
    </>
  );
};

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
  z-index: 1;
  border-bottom: 1px solid #ededed;
`;

const HeaderItems = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
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
`;

const HeaderLogo = styled(Link)`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

export default Header;
