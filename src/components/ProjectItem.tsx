import { ListImg } from "../assets/img";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { projectType } from "../apis/project/Search";

export const ProjectItem = ({
  id,
  name,
  content,
  date,
  image_url,
  target_funding_amount,
  funding_amount,
}: projectType) => {
  return (
    <_Wrapper to={`/project/${id}`} onClick={() => window.scrollTo(0, 0)}>
      <_Preview url={image_url ? image_url : ListImg} />
      <_Post>
        <div>
          <_Title>{name}</_Title>
          <_Content>{content}</_Content>
        </div>
        <div>
          <_Date>등록날짜 | {date}</_Date>
          <_Funding>
            {funding_amount}원 / {target_funding_amount}원
          </_Funding>
        </div>
      </_Post>
    </_Wrapper>
  );
};

const _Post = styled.div`
  padding: 0px 30px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const _Date = styled.time`
  display: block;
  color: ${({ theme }) => theme.color.gray700};
`;

const _Funding = styled.div`
  color: ${({ theme }) => theme.color.main};
  margin: 10px 0px 20px 0px;
`;

const _Content = styled.div`
  color: ${({ theme }) => theme.color.gray900};
  font-size: 16px;
`;

const _Title = styled.h2`
  margin: 25px 0px;
`;

const _Wrapper = styled(Link)`
  width: 400px;
  height: 500px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-decoration: none;
  color: black;
  text-align: center;
  :active {
    color: black;
  }
`;

const _Preview = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-size: cover;
  height: 150px;
  border-radius: 12px 12px 0px 0px;
`;
