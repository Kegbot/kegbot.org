import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "#0D1117",
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; 2003&ndash;{new Date().getFullYear()} The Kegbot Project
        contributors
      </Typography>
    </Box>
  );
}
