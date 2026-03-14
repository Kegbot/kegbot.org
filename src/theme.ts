import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#07689F",
    },
    secondary: {
      main: "#C9D6DF",
    },
    success: {
      main: "#11D3BC",
    },
    error: {
      main: "#F67280",
    },
    info: {
      main: "#A2D5F2",
    },
    warning: {
      main: "#FF7E67",
    },
    background: {
      default: "#ffffff",
      paper: "#FAFAFA",
    },
    text: {
      primary: "#4e4e4e",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: { fontFamily: "'Source Sans 3', sans-serif" },
    h2: { fontFamily: "'Source Sans 3', sans-serif" },
    h3: { fontFamily: "'Source Sans 3', sans-serif" },
    h4: { fontFamily: "'Source Sans 3', sans-serif" },
    h5: { fontFamily: "'Source Sans 3', sans-serif" },
    h6: { fontFamily: "'Source Sans 3', sans-serif" },
  },
});

export default theme;
