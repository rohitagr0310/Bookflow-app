import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./_HomePage.sass";
import Header from "./header/Header";
import libraryImage from "./Images/library.jpg";

const theme = createTheme();

const HomePage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h3" className={classes.mainHeading} gutterBottom>
            Welcome to BookFlow Library
          </Typography>
          <Typography variant="body1" className={classes.contentText} paragraph>
            This is a Library Management WebApp designed to serve the needs of our college{"'"}s library.
            The app offers an intuitive platform
            for both students and administrators to interact with the library{"'"}s resources.
          </Typography>
          <section className={classes.section}>
            <Typography variant="h4" className={classes.sectionHeading}>
              About Us
            </Typography>
            <Typography variant="body1" className={classes.sectionContent} paragraph>
              Our Library Management WebApp simplifies the process of borrowing and returning books,
              making the library experience seamless and efficient.
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography variant="h4" className={classes.sectionHeading}>
              Features
            </Typography>
            <Typography className={classes.sectionContent}>
            • Easy browsing and searching of available books •
            </Typography>
            <Typography className={classes.sectionContent}>
            • Access to personalized student and administrator panels •
            </Typography>
            <Typography className={classes.sectionContent}>
            • Quick and convenient book borrowing and return process •
            </Typography>
          </section>
          <img
            src={libraryImage}
            alt="Library"
            className={classes.libraryImage}
          />
          <section className={classes.section}>
            <Typography variant="h4" className={classes.sectionHeading}>
              Testimonials
            </Typography>
            <div className={classes.testimonialCards}>
              <Card className={classes.testimonialCard}>
                <CardContent>
                  <Typography variant="body1" className={classes.testimonialContent}>
                    &#34;BookFlow has made managing library resources a breeze.
                    It{"'"}s user-friendly and has transformed our library experience.&#34;
                    <br /><br />~ Qaidjohar Jukker, Student
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.testimonialCard}>
                <CardContent>
                  <Typography variant="body1" className={classes.testimonialContent}>
              &#34;As an administrator, BookFlow has improved our library operations tremendously.
              It{"'"}s a must-have tool.&#34; <br /><br />~ Adarsh Regar, Administrator
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>
          <Typography variant="body1" className={classes.contentText} paragraph>
            Join us and explore a world of knowledge and imagination with BookFlow Library.
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
