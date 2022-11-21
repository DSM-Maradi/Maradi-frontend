import StyleProvider from "./styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import CreateProject from "./components/createproject";
import MyPage from "./components/mypage";
import SeeProject from "./components/seeproject";
import Hall from "./components/hall";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <StyleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/createProject" element={<CreateProject />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/project/:id" element={<SeeProject />} />
            <Route path="/hall" element={<Hall />} />
          </Routes>
        </BrowserRouter>
      </StyleProvider>
    </RecoilRoot>
  );
};

export default App;
