import styled from "styled-components";
import { ThreeDot, ListImg } from "../../../assets/img";
import { Link } from "react-router-dom";
import { projectType } from "../../../apis/project/My";
import { Dispatch, SetStateAction } from "react";

interface PropsType extends projectType {
  checked: number;
  setChecked: Dispatch<SetStateAction<number>>;
}

const ProjectCard = ({
  id,
  name,
  content,
  date,
  target_funding_amount,
  funding_amount,
  setChecked,
  checked,
}: PropsType) => {
  return (
    <Link to={`/project/${id}`}>
      <ListItems key={id} checked={checked} index={id}>
        <ImgWrapper>
          <Image
            src={ThreeDot}
            onClick={(e: React.MouseEvent<HTMLImageElement>) => {
              setChecked(id !== checked ? id : -1);
            }}
            alt="프로젝트 수정 및 삭제"
          />
          {checked === id ? (
            <SmallList checked={checked} idx={id}>
              <ListLink to="">
                <List>수정</List>
              </ListLink>
              <ListLink to="">
                <List>삭제</List>
              </ListLink>
            </SmallList>
          ) : null}
        </ImgWrapper>
        <TitleWrapper>
          <h3>{name}</h3>
          <ListContents>{content}</ListContents>
        </TitleWrapper>
        <ListBottom>
          <RegisterDate>등록날짜 | {date}</RegisterDate>
          <Money>
            {target_funding_amount}원 / {funding_amount}원
          </Money>
        </ListBottom>
      </ListItems>
    </Link>
  );
};

const TitleWrapper = styled.div`
  padding: 0 20px;
`;

const ListItems = styled.li<{ checked: number; index: number }>`
  width: 500px;
  height: 400px;
  margin: 0 40px 5% 0;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 3px #b6b6b6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: ${({ checked, index }) =>
    checked !== -1 && index === checked ? 2 : 1};
  @keyframes slideUp {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-5%);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  animation: slideDown
    ${({ checked, index }) => (checked !== -1 && index === checked ? 0 : 0.4)}s;
  transform: translateY(
    ${({ checked, index }) =>
      checked !== -1 && index === checked ? "-5%" : "0%"}
  );
  :hover {
    animation: slideUp
      ${({ checked, index }) =>
        checked !== -1 && index === checked ? 0 : 0.4}s;
    animation-fill-mode: forwards;
  }
`;

const ListContents = styled.div`
  color: ${({ theme }) => theme.color.gray900};
  margin-top: 10px;
`;
const ListBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const RegisterDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.arita};
  line-height: 14px;
  color: ${({ theme }) => theme.color.gray700};
  display: flex;
  flex-direction: column-reverse;
`;

const Money = styled.span`
  color: ${({ theme }) => theme.color.darkmain};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.arita};
`;

const List = styled.div`
  width: 144px;
  height: 45px;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray700};
  :hover {
    background: ${({ theme }) => theme.color.gray700};
  }
`;

const ListLink = styled(Link)`
  text-decoration: none;
`;

const SmallList = styled.div<{ checked: number; idx: number }>`
  width: 144px;
  height: 90px;
  position: absolute;
  transform: translate(100px, 50px);
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px 15px 0 0;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${ListImg});
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
`;

export default ProjectCard;
