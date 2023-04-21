import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Text, View } from "react-native";
import { Welcome } from "./src/global/pages/welcome";
import { Home } from "./src/global/pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome /> */}

      <Home />
    </ThemeProvider>
  );
}
