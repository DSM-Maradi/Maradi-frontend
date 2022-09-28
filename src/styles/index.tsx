import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import theme from "./theme";

interface PropsType {
  children: React.ReactNode;
}

const StyleProvider = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
