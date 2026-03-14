import ConstructionIcon from "@mui/icons-material/Construction";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function GettingStarted() {
  return (
    <Container
      maxWidth="md"
      sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}
    >
      <ConstructionIcon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        Build a Kegbot
      </Typography>
      <Divider
        sx={{
          mb: 4,
          width: 60,
          mx: "auto",
          borderBottomWidth: 3,
          borderColor: "primary.main",
        }}
      />
      <Typography color="text.secondary" variant="h6" fontWeight={300} mb={2}>
        We'll start by getting the software working, then give you pointers for
        the hardware build.
      </Typography>
      <Box
        sx={{
          mt: 4,
          p: 4,
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Coming Soon
        </Typography>
        <Typography color="text.secondary">
          The getting started guide is under construction. In the meantime,
          visit the{" "}
          <Box
            component="a"
            href="https://forum.kegbot.org"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "primary.main" }}
          >
            community forum
          </Box>{" "}
          for help getting set up.
        </Typography>
      </Box>
    </Container>
  );
}
