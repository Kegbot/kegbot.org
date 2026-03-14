import BarChartIcon from "@mui/icons-material/BarChart";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ExtensionIcon from "@mui/icons-material/Extension";
import MemoryIcon from "@mui/icons-material/Memory";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <MonitorHeartIcon sx={{ fontSize: 48 }} color="primary" />,
    title: "Keg Monitoring",
    body: "Full visibility into your keg contents with historical pour data and complete beverage management.",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 48 }} color="primary" />,
    title: "Pour Tracking",
    body: "Detailed pour history, optionally with individual user statistics and accountability.",
  },
  {
    icon: <ExtensionIcon sx={{ fontSize: 48 }} color="primary" />,
    title: "Extendable",
    body: "A community-driven, open-source platform you can customize and extend to fit your setup.",
  },
  {
    icon: <TabletAndroidIcon sx={{ fontSize: 48 }} color="primary" />,
    title: "Android Tablet App",
    body: "A free app for displaying real-time keg status with photo capabilities and a polished UI.",
  },
  {
    icon: <DeveloperBoardIcon sx={{ fontSize: 48 }} color="primary" />,
    title: "Raspberry Pi Friendly",
    body: "Run the full stack on a Raspberry Pi — use it for system control, or as a server-only installation.",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 48 }} color="primary" />,
    title: "Open Hardware",
    body: "Build your own flow sensor controller using open hardware designs, Arduino firmware, and standard parts.",
  },
];

const components = [
  {
    title: "Kegbot Server",
    version: "v1.3.0",
    date: "May 2020",
    description:
      "The core of the Kegbot system. Manages your beverage database, records pours, and hosts the web interface. Runs anywhere Docker is supported.",
    links: [
      { label: "Documentation", href: "https://kegbot-server.readthedocs.io/" },
      { label: "Source Code", href: "https://github.com/Kegbot/kegbot-server" },
    ],
  },
  {
    title: "Kegbot Android App",
    version: "v1.0.0b24",
    date: "June 2014",
    description:
      "A tablet-optimized Android app that displays live keg status, captures pour photos, and interfaces directly with the Kegbot server.",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=org.kegbot.app",
      },
      {
        label: "Source Code",
        href: "https://github.com/Kegbot/kegbot-android",
      },
    ],
  },
  {
    title: "Kegboard Arduino Firmware",
    version: "v18",
    date: "May 2014",
    description:
      "DIY USB flow sensor firmware for Arduino. Connects your flow meters to the Kegbot server. Build instructions and schematics are available on GitHub.",
    links: [
      { label: "Source Code", href: "https://github.com/Kegbot/kegboard" },
    ],
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background:
            "linear-gradient(160deg, #0D1117 0%, #161B22 50%, #1A1F2B 100%)",
          color: "text.primary",
          py: { xs: 8, md: 14 },
          textAlign: "center",
          borderBottom: 1,
          borderColor: "divider",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            gutterBottom
            sx={{
              fontFamily: "'Sora', sans-serif",
              fontSize: { xs: "2rem", md: "3rem" },
              background: "linear-gradient(135deg, #00E5FF, #FF6EC7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kegbot: The Pour-Tracking Kegerator
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", mb: 4, fontWeight: 300 }}
          >
            A free, open-source software and hardware system to build an
            intelligent beer or beverage keg tracker.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/getting-started")}
            >
              Getting Started Guide
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://forum.kegbot.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community Forum
            </Button>
          </Stack>
          <Typography
            variant="body2"
            sx={{ mt: 3, color: "text.secondary", fontStyle: "italic" }}
          >
            Open source &amp; over-engineered since <strong>2003</strong>.
          </Typography>
        </Container>
      </Box>

      {/* Features */}
      <Box id="features" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight={700}
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            Features
          </Typography>
          <Divider
            sx={{
              mb: 6,
              width: 60,
              mx: "auto",
              borderBottomWidth: 3,
              borderColor: "primary.main",
            }}
          />
          <Grid container spacing={3}>
            {features.map((f) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={f.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 2,
                    bgcolor: "background.paper",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: "0 0 20px rgba(0,229,255,0.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{f.icon}</Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {f.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Components */}
      <Box
        id="components"
        sx={{ py: { xs: 6, md: 10 }, bgcolor: "rgba(22, 27, 34, 0.5)" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight={700}
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Components
          </Typography>
          <Divider
            sx={{
              mb: 6,
              width: 60,
              mx: "auto",
              borderBottomWidth: 3,
              borderColor: "secondary.main",
            }}
          />
          <Stack spacing={4}>
            {components.map((c) => (
              <Card
                key={c.title}
                elevation={0}
                sx={{ border: 1, borderColor: "divider" }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    spacing={1}
                    mb={2}
                  >
                    <Typography variant="h5" fontWeight={700}>
                      {c.title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip label={c.version} size="small" color="primary" />
                      <Chip label={c.date} size="small" variant="outlined" />
                    </Stack>
                  </Stack>
                  <Typography color="text.secondary" mb={3}>
                    {c.description}
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    {c.links.map((l) => (
                      <Button
                        key={l.label}
                        variant="outlined"
                        size="small"
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label}
                      </Button>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "center",
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            Ready to build your Kegbot?
          </Typography>
          <Typography color="text.secondary" mb={4}>
            Follow the getting started guide to set up your server, then wire up
            the hardware.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/getting-started")}
            >
              Getting Started Guide
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://forum.kegbot.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community Forum
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
