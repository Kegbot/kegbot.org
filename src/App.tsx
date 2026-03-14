import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./pages/About";
import GettingStarted from "./pages/GettingStarted";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
