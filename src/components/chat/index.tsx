import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/header";

const roomList = [
  "방 번호 NO.1",
  "방 번호 NO.2",
  "방 번호 NO.3",
  "방 번호 NO.4",
  "방 번호 NO.5",
  "방 번호 NO.6",
  "방 번호 NO.7",
  "방 번호 NO.8",
  "방 번호 NO.9",
  "방 번호 NO.10",
];

export const Chat = () => {
  return (
    <div>
      <Header />
      <_MarginTop />
      <_RoomList>
        {roomList.map((room, i) => (
          <_Link to={`/chat/${i}`}>
            <_Wrapper>
              <div>{room}</div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 21.6667C14.5278 21.6667 14.1322 21.5067 13.8133 21.1867C13.4933 20.8678 13.3333 20.4722 13.3333 20C13.3333 19.5278 13.4933 19.1317 13.8133 18.8117C14.1322 18.4928 14.5278 18.3333 15 18.3333C15.4722 18.3333 15.8683 18.4928 16.1883 18.8117C16.5072 19.1317 16.6667 19.5278 16.6667 20C16.6667 20.4722 16.5072 20.8678 16.1883 21.1867C15.8683 21.5067 15.4722 21.6667 15 21.6667ZM25 21.6667C24.5278 21.6667 24.1322 21.5067 23.8133 21.1867C23.4933 20.8678 23.3333 20.4722 23.3333 20C23.3333 19.5278 23.4933 19.1317 23.8133 18.8117C24.1322 18.4928 24.5278 18.3333 25 18.3333C25.4722 18.3333 25.8683 18.4928 26.1883 18.8117C26.5072 19.1317 26.6667 19.5278 26.6667 20C26.6667 20.4722 26.5072 20.8678 26.1883 21.1867C25.8683 21.5067 25.4722 21.6667 25 21.6667ZM6.66667 35C6.19444 35 5.79889 34.84 5.48 34.52C5.16 34.2011 5 33.8056 5 33.3333C5 32.8611 5.16 32.4656 5.48 32.1467C5.79889 31.8267 6.19444 31.6667 6.66667 31.6667V8.33333C6.66667 7.41667 6.99333 6.63167 7.64667 5.97833C8.29889 5.32611 9.08333 5 10 5H30C30.9167 5 31.7017 5.32611 32.355 5.97833C33.0072 6.63167 33.3333 7.41667 33.3333 8.33333V31.6667C33.8056 31.6667 34.2011 31.8267 34.52 32.1467C34.84 32.4656 35 32.8611 35 33.3333C35 33.8056 34.84 34.2011 34.52 34.52C34.2011 34.84 33.8056 35 33.3333 35H6.66667ZM10 31.6667H18.3333V8.33333H10V31.6667ZM21.6667 31.6667H30V8.33333H21.6667V31.6667Z"
                  fill="black"
                />
              </svg>
            </_Wrapper>
          </_Link>
        ))}
      </_RoomList>
    </div>
  );
};

const _RoomList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;

const _MarginTop = styled.div`
  padding-top: 170px;
`;

const _Link = styled(Link)`
  text-decoration: none;
  color: black;
  :active {
    color: black;
  }
`;

const _Wrapper = styled.h2`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray700};
  background-color: ${({ theme }) => theme.color.background};
  cursor: pointer;
  :hover {
    background-color: #ecf2ff;
  }
  :active {
    background-color: #e3edff;
  }
`;
