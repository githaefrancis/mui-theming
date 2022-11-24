import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Button,
  ThemeProvider,
  CssBaseline,
  PaletteMode,
  createTheme,
} from "@mui/material";
// import { appTheme } from "./themes/theme";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { ColorContext } from "./contexts/ColorContext";
import { SwitchModeButton } from "./components/SwitchModeButton/SwitchModeButton";
function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {/* <div style={{ margin: "1em" }}>
          <Button color="primary" variant="contained">
            Primary
          </Button>
          <Button color="secondary" variant="contained">
            Secondary
          </Button>
        </div> */}
        <SwitchModeButton />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
