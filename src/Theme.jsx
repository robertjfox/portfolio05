import React from "react";
import { ThemeProvider } from "styled-components";



const theme = {
  colors: {
    accent: "#1DA1F2",
    black: "#14171A",
    darkGray: "#657786",
    lightGray: "#AAB8C2",
    xlGray: "#E1E8ED",
    xxlGray: "#F5F8FA",
  },
  fonts: ["Lexend"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
