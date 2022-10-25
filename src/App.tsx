import StyleProvider from "./styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import CreateProject from "./components/project";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/createProject" element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
