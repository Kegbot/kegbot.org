import { CssBaseline, ThemeProvider } from "@mui/material";
import type React from "react";
import { Route, Routes } from "react-router";

import Layout from "./components/Layout";
import About from "./pages/About";
import GettingStarted from "./pages/GettingStarted";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import theme from "./theme";

export default function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
