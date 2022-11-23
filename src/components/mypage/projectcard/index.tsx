import styled from "styled-components";
import { ThreeDot, ListImg } from "../../../assets/img";
import { projectType } from "../../../apis/project/My";
import { Dispatch, SetStateAction } from "react";
import { customToast } from "../../../utils/Toast";

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
  image_url,
}: PropsType) => {
  return (
    <ListItems
      onClick={() => (window.location.href = `/project/${id}`)}
      key={id}
      checked={checked}
      index={id}
    >
      <ImgWrapper image={image_url}>
        <Image
          src={ThreeDot}
          onClick={(e: React.MouseEvent<HTMLImageElement>) => {
            e.stopPropagation();
            setChecked(id !== checked ? id : -1);
          }}
          alt="프로젝트 수정"
        />
        {checked === id ? (
          <SmallList
            onClick={(e) => e.stopPropagation()}
            checked={checked}
            idx={id}
          >
            <ListLink>
              <List>수정</List>
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
  );
};

const TitleWrapper = styled.div`
  padding: 0 20px;
  color: ${({ theme }) => theme.color.black};
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
  margin: 10px 0 0 0;
`;
const ListBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  margin-left: 30px;
`;

const Money = styled.span`
  color: ${({ theme }) => theme.color.darkmain};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.arita};
  margin-right: 30px;
`;

const List = styled.div`
  width: 144px;
  height: 45px;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${({ theme }) => theme.color.gray700};
    border-radius: 10px;
  }
`;

const ListLink = styled.div`
  text-decoration: none;
`;

const SmallList = styled.div<{ checked: number; idx: number }>`
  width: 144px;
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

const ImgWrapper = styled.div<{ image: string }>`
  width: 100%;
  height: 150px;
  background-image: url(${({ image }) => (image ? image : ListImg)});
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
`;

export default ProjectCard;
