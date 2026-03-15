import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

/* ── Timeline data ──────────────────────────────────────────────── */

interface TimelineEvent {
  year: number | string;
  title: string;
  description: React.ReactNode;
  image?: { src: string; alt: string };
  video?: string;
  quote?: { text: string; attribution?: string };
  link?: { href: string; label: string };
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2003,
    title: "Kegbot Invented",
    description: (
      <>
        Mikey creates Kegbot while bored during grad school. It is the first
        ever system of its kind, supporting:
        <ul>
          <li>Pour volume sensing, with an inline flow meter</li>
          <li>Per-drinker access control, with a solenoid valve</li>
        </ul>
        The original Kegbot code is a crude python application, a PIC16
        microcontroller, and a PHP frontend.
      </>
    ),
    link: {
      href: "https://github.com/Kegbot/kegbot-server/commit/2b454aed63a479e276f6b0c9f56d6dde00c05cbd",
      label: "View the awful first commit",
    },
  },
  {
    year: 2005,
    title: "Kegbot at DEFCON 13",
    description:
      "The Kegbot crew rolls out to Las Vegas and throws a party at DEFCON, the annual hacker conference. Nobody hacks it.",
    quote: {
      text: "One the coolest projects I've seen so far at DEFCON was the kegbot, a linux based keg that dispenses beer as long as you have an iButton key. The system keeps track of who you are, how much you're drinking and in team mode- where you rank.",
    },
    link: {
      href: "https://arstechnica.com/gaming/2005/07/834/",
      label: "Ars Technica coverage",
    },
  },
  {
    year: 2005,
    title: "Kegbot in Print",
    description:
      "Kegbot is in print! The December edition of Popular Science features a two page spread on Kegbot, featuring a detailed illustration.",
    quote: {
      text: "Cross a Linux computer with a keg fridge, and you get a tap that knows when you've had enough.",
      attribution: "Paul Wallich, Popular Science, Vol 267, No 6",
    },
    link: {
      href: "https://books.google.com/books?id=TZOEBBZkjjQC&lpg=PA111&dq=kegbot&pg=PA111#v=onepage&q=kegbot&f=false",
      label: "Read on Google Books",
    },
  },
  {
    year: 2006,
    title: "PIC Firmware Opensourced",
    description:
      "Our PIC16 firmware, written in a weird but useful language called JAL, is opensourced.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/commit/48e7643df577bd134c0bb1b5649014bfa9e78cd6",
      label: "View the commit",
    },
  },
  {
    year: 2006,
    title: "Django Migration",
    description:
      "Kegbot drops PHP and switches to Django for its backend operations and web frontend.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/commit/0235bcbeaff855c96591c75b0f26485e8778e5d7",
      label: "View the commit",
    },
  },
  {
    year: 2009,
    title: "Kegbot Learns to Tweet",
    description:
      "Back in 2009, when the internet is fun, nerds sat around and figured out how to make different things tweet.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/commit/59e80676fa6efa360e48732500e05ba68a36ad76",
      label: "View the commit",
    },
  },
  {
    year: 2009,
    title: "Arduino Microcontroller",
    description:
      "The Arduino emerges as a cheap and easy-to-use microcontroller platform. Kegbot's flow sensing firmware is ported as we start making the shift.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/commit/a86fb05219df17a5511cfa0de84118c23eaca40e",
      label: "View the commit",
    },
  },
  {
    year: 2010,
    title: "REST API",
    description:
      "Kegbot gets a proper REST API, supporting new kinds of third-party integrations.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/commit/8b6dcbe4941ff959488d0675403a43abddcbbb7d",
      label: "View the commit",
    },
  },
  {
    year: 2010,
    title: "Kegbot v0.7.0",
    description: "Kegbot version 0.7.0 is released.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v0.7.0",
      label: "View the release",
    },
  },
  {
    year: 2011,
    title: "Kegbot v0.8.0",
    description: "Kegbot version 0.8.0 is released.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v0.8.0",
      label: "View the release",
    },
  },
  {
    year: 2012,
    title: "Kegbot v0.9.0",
    description: "Kegbot version 0.9.0 is released.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v0.9.0",
      label: "View the release",
    },
  },
  {
    year: 2012,
    title: "Tablet App Launched",
    description:
      "Kegbot goes mobile with a dedicated Android tablet app that can serve as a pour controller and display.\n\nThe tablet has a questionable but highly entertaining feature that takes a picture of you as it pours.",
  },
  {
    year: 2014,
    title: "Kegboard Pro Mini & Kickstarter",
    description:
      "We start a small company and run a Kickstarter, producing the Kegbot Pro Mini, our custom controller board.",
    video: "https://www.youtube.com/watch?v=vR0pqkPFUsw",
    link: {
      href: "https://www.kickstarter.com/projects/1275337514/kegbot-internet-beer-kegerator",
      label: "Gaze upon our dead but successful Kickstarter for some reason",
    },
  },
  {
    year: 2022,
    title: "Kegbot v1.0.0",
    description: "We finally hit the big 1-point-0 and release v1.0.0.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v1.0.0",
      label: "View the release",
    },
  },
  {
    year: 2022,
    title: "Kegbot v1.1.0",
    description: "Kegbot version 1.1.0 is released.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v1.1.0",
      label: "View the release",
    },
  },
  {
    year: 2022,
    title: "Kegbot v1.2.0",
    description: "Kegbot version 1.2.0 is released.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v1.2.0",
      label: "View the release",
    },
  },
  {
    year: 2022,
    title: "Kegbot v1.3.0",
    description: "Kegbot version 1.3.0 is released.",
    link: {
      href: "https://github.com/Kegbot/kegbot-server/releases/v1.3.0",
      label: "View the release",
    },
  },
  {
    year: "Today",
    title: "Kegbot Never Dies",
    description:
      "Kegbot continues as a volunteer-maintained project with an active community of homebrewers and hackers.",
  },
];

/* ── Timeline component ─────────────────────────────────────────── */

function HistoryTimeline({ events }: { events: TimelineEvent[] }) {
  let lastYear: number | string | null = null;

  return (
    <Timeline
      position="right"
      sx={{
        p: 0,
        "& .MuiTimelineOppositeContent-root": {
          flex: 0,
          minWidth: { xs: 50, md: 70 },
          px: 0,
          pr: 2,
        },
      }}
    >
      {events.map((event, i) => {
        const showYear = event.year !== lastYear;
        lastYear = event.year;
        const isLast = i === events.length - 1;

        return (
          <TimelineItem key={i}>
            <TimelineOppositeContent
              sx={{
                pt: showYear ? 0 : "14px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              {showYear ? (
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    color: "#0D1117",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {event.year}
                </Box>
              ) : null}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "transparent",
                  borderColor: "primary.main",
                  borderWidth: 2,
                  boxShadow: "none",
                  my: showYear ? 0.5 : 1.5,
                }}
                variant="outlined"
              />
              {!isLast && <TimelineConnector sx={{ bgcolor: "divider" }} />}
            </TimelineSeparator>

            <TimelineContent sx={{ pt: showYear ? 0 : 1, pb: 4 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "text.primary", mb: 0.5 }}
              >
                {event.title}
              </Typography>

              {typeof event.description === "string" ? (
                event.description.split("\n\n").map((para, j) => (
                  <Typography
                    key={j}
                    color="text.secondary"
                    lineHeight={1.8}
                    sx={{ mb: 1.5 }}
                  >
                    {para}
                  </Typography>
                ))
              ) : (
                <Typography
                  component="div"
                  color="text.secondary"
                  lineHeight={1.8}
                  sx={{ mb: 1.5 }}
                >
                  {event.description}
                </Typography>
              )}

              {event.image && (
                <Box
                  component="img"
                  src={event.image.src}
                  alt={event.image.alt}
                  sx={{
                    maxWidth: "100%",
                    width: { xs: "100%", md: 400 },
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    mb: 1.5,
                  }}
                />
              )}

              {event.video && (
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: 480 },
                    maxWidth: "100%",
                    aspectRatio: "16 / 9",
                    mb: 1.5,
                    borderRadius: 1,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    component="iframe"
                    src={event.video
                      .replace("watch?v=", "embed/")
                      .replace("youtu.be/", "youtube.com/embed/")}
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                  />
                </Box>
              )}

              {event.quote && (
                <Box
                  sx={{
                    borderLeft: "3px solid",
                    borderColor: "secondary.main",
                    pl: 2,
                    py: 0.5,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    "{event.quote.text}"
                  </Typography>
                  {event.quote.attribution && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      — {event.quote.attribution}
                    </Typography>
                  )}
                </Box>
              )}

              {event.link && (
                <Link
                  href={event.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary.main",
                    fontSize: "0.9rem",
                    textDecorationColor: "rgba(0, 229, 255, 0.4)",
                    "&:hover": {
                      textDecorationColor: "primary.main",
                    },
                  }}
                >
                  {event.link.label} →
                </Link>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

/* ── About sections ─────────────────────────────────────────────── */

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

function kegbotAge() {
  const now = new Date();
  const founded = new Date(2003, 8, 1); // September 1, 2003
  let years = now.getFullYear() - founded.getFullYear();
  if (
    now.getMonth() < founded.getMonth() ||
    (now.getMonth() === founded.getMonth() && now.getDate() < founded.getDate())
  ) {
    years--;
  }
  return years;
}

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h3"
        component="h1"
        fontWeight={700}
        gutterBottom
        sx={{ color: "primary.main" }}
      >
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
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ color: "secondary.main" }}
            >
              {s.title}
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8}>
              {s.body}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* History / Timeline */}
      <Typography
        variant="h3"
        component="h2"
        fontWeight={700}
        sx={{ color: "primary.main", mt: { xs: 10, md: 14 } }}
        gutterBottom
      >
        History
      </Typography>
      <Divider
        sx={{
          mb: 3,
          width: 60,
          borderBottomWidth: 3,
          borderColor: "primary.main",
        }}
      />
      <Typography color="text.secondary" lineHeight={1.8} sx={{ mb: 4 }}>
        Kegbot is{" "}
        <Box
          component="span"
          sx={{
            fontWeight: 900,
            textDecoration: "underline dashed",
            textDecorationColor: "primary.main",
            textUnderlineOffset: 4,
          }}
        >
          {kegbotAge()} years old
        </Box>
        , which is old enough to drink everywhere we know of. At least one
        Kegbot (and often many more) have been operational since then.
      </Typography>
      <HistoryTimeline events={timelineEvents} />
    </Container>
  );
}
