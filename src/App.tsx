import StyleProvider from "./styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import CreateProject from "./components/createproject";
import MyPage from "./components/mypage";
import SeeProject from "./components/seeproject";
import Hall from "./components/hall";
import { RecoilRoot } from "recoil";
import { Chat } from "./components/chat";
import { Chating } from "./components/chat/chating";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Introduce from "./components/introduce";

const App = () => {
  return (
    <RecoilRoot>
      <StyleProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/createProject" element={<CreateProject />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/project/:id" element={<SeeProject />} />
            <Route path="/hall" element={<Hall />} />
            <Route path="/chat">
              <Route index element={<Chat />} />
              <Route path=":id" element={<Chating />} />
            </Route>
            <Route path="introduce" element={<Introduce />} />
          </Routes>
        </BrowserRouter>
      </StyleProvider>
    </RecoilRoot>
  );
};

export default App;
