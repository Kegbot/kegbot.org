import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} The Kegbot Project contributors
      </Typography>
    </Box>
  );
}
