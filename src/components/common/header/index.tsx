import styled from "styled-components";
import { headLogo } from "../../../assets/img";

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
`;

const HeaderItems = styled.div`
  width: 500px;
  position: absolute;
  justify-content: space-between;
  display: flex;
  padding: 17px 0px 0px 0px;
  left: 55%;
`;
const HeaderLogo = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding-top: 7px;
  left: 13%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={headLogo}></img>
        <div>MARADI</div>
      </HeaderLogo>
      <HeaderItems>
        <a>명예의 전당</a>
        <a>프로젝트</a>
        <div>
          <a>로그인</a>/<a>회원가입</a>
        </div>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
