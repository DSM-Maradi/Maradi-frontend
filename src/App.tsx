import StyleProvider from "./styles";
import { Route, Routes } from "react-router";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
