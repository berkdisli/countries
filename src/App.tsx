import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import CssBaseline from "@mui/material/CssBaseline";

import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

import Index from "./routes";

import "./App.scss";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<"dark" | "light">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FormGroup className="switch">
          <BsSun className="sun" />
          <Switch
            className="switch-button"
            checked={mode === "light" ? false : true}
            onChange={colorMode.toggleColorMode}
            color={"secondary"}
            aria-label="theme switch"
          />
          <BsMoon className="moon" />
        </FormGroup>
        <Index />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
