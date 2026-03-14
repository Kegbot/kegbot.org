import { Box, Container, Divider, Stack, Typography } from "@mui/material";

const sections = [
  {
    title: "About the Project",
    body: "Kegbot is a free, open source project, created in 2003 by Mike Wakerly. It is currently maintained by volunteers and community members. The project exists to provide a free, capable keg management system for homebrewers and hobbyists.",
  },
  {
    title: "Support",
    body: "There is no official support for Kegbot. The best way to get help is through the community discussion forum, where other users and contributors can assist you.",
  },
  {
    title: "Contributing",
    body: "Contributions are always welcome. Whether it's patches, documentation improvements, or pull requests on GitHub — we appreciate all help. Check out the source repositories on GitHub to get started.",
  },
  {
    title: "Hardware",
    body: "The Kegbot project does not sell hardware directly. Bevbot LLC previously produced the Kegboard Pro Mini as part of a Kickstarter campaign in 2014, but that product is now discontinued. Hardware builds are DIY — see the GitHub repos for schematics and build guides.",
  },
  {
    title: "Commercial Use",
    body: "Commercial use (bars, restaurants, etc.) is not officially supported. You are free to use the software under its open-source license terms, but be aware that it is primarily designed for hobbyist use and comes with no guarantees or official support.",
  },
  {
    title: "Licensing",
    body: "All Kegbot software uses free and open-source licenses. Copyright is held by the individual contributors. The Kegbot name is a registered trademark.",
  },
];

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        About Kegbot
      </Typography>
      <Divider
        sx={{
          mb: 6,
          width: 60,
          borderBottomWidth: 3,
          borderColor: "primary.main",
        }}
      />
      <Stack spacing={5}>
        {sections.map((s) => (
          <Box key={s.title}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {s.title}
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8}>
              {s.body}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
