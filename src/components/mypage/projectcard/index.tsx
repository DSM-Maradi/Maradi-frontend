import styled from "styled-components";
import { ThreeDot, ListImg } from "../../../assets/img";
import { Link } from "react-router-dom";

interface PropsType {
  index: number;
  title: string;
  text: string;
  date: string;
  goalMoney: number;
  nowMoney: number;
  checked: number;
  setChecked: (checked: number) => void;
}

const ProjectCard = ({
  index,
  title,
  text,
  date,
  goalMoney,
  nowMoney,
  checked,
  setChecked,
}: PropsType) => {
  return (
    <ListItems>
      <ImgWrapper>
        <Image
          src={ThreeDot}
          onClick={() => {
            setChecked(index !== checked ? index : -1);
          }}
          alt="프로젝트 수정 및 삭제"
        />
        {checked === index && (
          <SmallList>
            <ListLink to="">
              <List>수정</List>
            </ListLink>
            <ListLink to="">
              <List>삭제</List>
            </ListLink>
          </SmallList>
        )}
      </ImgWrapper>
      <TitleWrapper>
        <h3>{title}</h3>
        <ListContents>{text}</ListContents>
      </TitleWrapper>
      <ListBottom>
        <RegisterDate>등록날짜 | {date}</RegisterDate>
        <Money>
          {goalMoney}원 / {nowMoney}원
        </Money>
      </ListBottom>
    </ListItems>
  );
};

const TitleWrapper = styled.div`
  padding: 0 20px 0 20px;
`;

const ListItems = styled.li`
  width: 500px;
  height: 400px;
  margin: 0 40px 5% 0;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 3px #b6b6b6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
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
  animation: slideDown 0.4s;
  :hover {
    animation: slideUp 0.4s;
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
  width: 140px;
  height: 45px;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray700};
`;

const ListLink = styled(Link)`
  text-decoration: none;
`;

const SmallList = styled.div`
  width: 144px;
  height: 90px;
  position: absolute;
  transform: translate(100px, 50px);
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
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
