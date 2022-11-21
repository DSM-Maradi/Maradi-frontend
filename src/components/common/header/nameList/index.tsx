import styled from "styled-components";
import { Link } from "react-router-dom";

interface PropsType {
  setLogin: (login: boolean) => void;
}

const NameList = ({ setLogin }: PropsType) => {
  const goToTop = () => window.scrollTo(0, 0);
  const LogoutOnClick = () => {
    setLogin(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("code");
  };
  return (
    <ListWrapper>
      <Wrapper onClick={goToTop} to="/mypage">
        <Items>
          <span>마이페이지</span>
        </Items>
      </Wrapper>
      <Wrapper to="">
        <Items onClick={LogoutOnClick}>
          <span>로그아웃</span>
        </Items>
      </Wrapper>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 4;
`;

const Items = styled.div`
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray700};
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.arita};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  :hover {
    background: ${({ theme }) => theme.color.gray700};
  }
`;

const Wrapper = styled(Link)`
  text-decoration: none;
`;

export default NameList;
