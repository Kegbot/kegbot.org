import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{ py: { xs: 8, md: 14 }, textAlign: "center" }}
    >
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{
          fontSize: { xs: "4rem", md: "7rem" },
          background: "linear-gradient(135deg, #00E5FF, #FF6EC7)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
        sx={{ color: "text.primary" }}
      >
        NOT FOUND
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Oops! That page doesn't exist. Try the Discussion Forum link at the top
        if you need assistance.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button variant="contained" onClick={() => navigate("/")}>
          Go Home
        </Button>
        <Button
          variant="outlined"
          href="https://forum.kegbot.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discussion Forum
        </Button>
      </Box>
    </Container>
  );
}
