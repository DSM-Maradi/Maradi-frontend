import StyleProvider from "./styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import CreateProject from "./components/createproject";
import MyPage from "./components/mypage";
import Hall from "./components/hall";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/createProject" element={<CreateProject />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/hall" element={<Hall />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
