import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

import kegbotLogo from "../assets/kegbot-logo-full-white.png";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Components", href: "/#components" },
  { label: "Getting Started", href: "/getting-started" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#0D1117", borderBottom: 1, borderColor: "divider" }}
    >
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={kegbotLogo} alt="Kegbot" style={{ height: 32 }} />
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{ width: 240, bgcolor: "background.paper", height: "100%" }}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                      <ListItemButton onClick={() => handleNavClick(link.href)}>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href="https://forum.kegbot.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItemText primary="Discussion Forum" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              color="inherit"
              href="https://forum.kegbot.org"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: 1 }}
            >
              Discussion Forum
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
