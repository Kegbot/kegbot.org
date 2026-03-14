import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00E5FF",
    },
    secondary: {
      main: "#FF6EC7",
    },
    success: {
      main: "#69F0AE",
    },
    error: {
      main: "#FF5252",
    },
    info: {
      main: "#40C4FF",
    },
    warning: {
      main: "#FFD740",
    },
    background: {
      default: "#0D1117",
      paper: "#161B22",
    },
    text: {
      primary: "#E6EDF3",
      secondary: "#8B949E",
    },
    divider: "#30363D",
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'JetBrains Mono', monospace" },
    h2: { fontFamily: "'JetBrains Mono', monospace" },
    h3: { fontFamily: "'JetBrains Mono', monospace" },
    h4: { fontFamily: "'JetBrains Mono', monospace" },
    h5: { fontFamily: "'JetBrains Mono', monospace" },
    h6: { fontFamily: "'JetBrains Mono', monospace" },
    button: { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: 0.5,
        },
        containedPrimary: {
          color: "#0D1117",
          "&:hover": {
            backgroundColor: "#33EAFF",
          },
        },
        outlinedPrimary: {
          borderColor: "#00E5FF",
          "&:hover": {
            borderColor: "#33EAFF",
            backgroundColor: "rgba(0, 229, 255, 0.08)",
          },
        },
        outlinedInherit: {
          borderColor: "rgba(230, 237, 243, 0.3)",
          "&:hover": {
            borderColor: "rgba(230, 237, 243, 0.6)",
            backgroundColor: "rgba(230, 237, 243, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #30363D",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          color: "#0D1117",
        },
      },
    },
  },
});

export default theme;
