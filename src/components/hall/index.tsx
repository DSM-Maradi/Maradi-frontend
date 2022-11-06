import { HallBackground, ProfileImg } from "../../assets/img";
import Header from "../common/header";
import styled from "styled-components";
import { DummyData } from "../../constance/hall";

interface StyledProps {
  idx: number;
}

const Hall = () => {
  return (
    <Wrapper>
      <Header />
      <HallWrapper>
        <Title>명예의 전당</Title>
        <RankWrapper>
          {DummyData.map((e) => (
            <RankContainer key={e.id} idx={e.id}>
              <RankProfileImg>
                <RankText>{e.id}등</RankText>
                <Name>{e.name}</Name>
                <FundAmount>{e.amount}원</FundAmount>
              </RankProfileImg>
            </RankContainer>
          ))}
        </RankWrapper>
      </HallWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const HallWrapper = styled.div`
  height: 750px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  font-family: ${({ theme }) => theme.font.noto};
  color: ${({ theme }) => theme.color.black};
`;

const RankWrapper = styled.div`
  width: 1468px;
  height: 785px;
  background-image: url(${HallBackground});
`;

const RankContainer = styled.div<StyledProps>`
  width: 380px;
  height: 240px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ idx }) => (idx === 1 ? "30%" : idx === 2 ? "45%" : "55%")};
  left: ${({ idx }) => (idx === 1 ? "40%" : idx === 2 ? "13%" : "65%")};
  cursor: pointer;
  @keyframes sizeup {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes sizedown {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: sizedown 0.4s;
  :hover {
    animation: sizeup 0.4s;
    animation-fill-mode: forwards;
  }
`;

const RankProfileImg = styled.div`
  width: 200px;
  height: 200px;
  background: url(${ProfileImg}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  filter: contrast(50%);
  border-radius: 100px;
`;

const RankText = styled.span`
  color: ${({ theme }) => theme.color.yellow};
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  font-family: ${({ theme }) => theme.font.noto};
  color: ${({ theme }) => theme.color.gray100};
`;

const FundAmount = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: ${({ theme }) => theme.color.gray100};
  font-family: ${({ theme }) => theme.font.noto};
`;

export default Hall;