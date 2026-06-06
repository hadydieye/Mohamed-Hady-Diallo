import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} onToggle={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
