import styled from "styled-components";
import { HeadLogo } from "../../../assets/img";
import { Link } from "react-router-dom";

interface PropsType {
  setModal: (modal: boolean) => void;
}

const Header = ({ setModal }: PropsType) => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <MainLogo src={HeadLogo} alt="헤더 로고" />
        <MainLogoFont>MARADI</MainLogoFont>
      </HeaderLogo>
      <HeaderItems>
        <ItemLink to="">명예의 전당</ItemLink>
        <ItemLink to="">프로젝트</ItemLink>
        <div onClick={() => setModal(true)}>
          <ItemLink to="">로그인</ItemLink>/<ItemLink to="">회원가입</ItemLink>
        </div>
      </HeaderItems>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 1;
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
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`;

const HeaderLogo = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
