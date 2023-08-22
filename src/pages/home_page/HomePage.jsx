import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./header/Header";
import libraryImage from "../../images/library.jpg";
import "./_HomePage.css";

const theme = createTheme();

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <Header />
        <Container maxWidth="lg">
          <Typography variant="h3" className="mainHeading" gutterBottom>
            WebApp to BookFlow Library
          </Typography>
          <Typography variant="body1" className="contentText" paragraph>
            This is a Library Management WebApp designed to serve the needs of our college{"'"}s library. The app offers
            an intuitive platform for both students and administrators to interact with the library{"'"}s resources.
          </Typography>
          <section className="section">
            <Typography variant="h4" className="sectionHeading">
              About Us
            </Typography>
            <Typography variant="body1" className="sectionContent" paragraph>
              Our Library Management WebApp simplifies the process of borrowing and returning books, making the library
              experience seamless and efficient.
            </Typography>
          </section>
          <section className="section">
            <Typography variant="h4" className="sectionHeading">
              Features
            </Typography>
            <Typography className="sectionContent">• Easy browsing and searching of available books •</Typography>
            <Typography className="sectionContent">
              • Access to personalized student and administrator panels •
            </Typography>
            <Typography className="sectionContent">
              • Quick and convenient book borrowing and return process •
            </Typography>
          </section>
          <img src={libraryImage} alt="Library" className="libraryImage" />
          <section className="section">
            <Typography variant="h4" className="sectionHeading">
              Testimonials
            </Typography>
            <div className="testimonialCards">
              <Card className="testimonialCard">
                <CardContent>
                  <Typography variant="body1" className="testimonialContent">
                    &#34;BookFlow has made managing library resources a breeze. It{"'"}s user-friendly and has
                    transformed our library experience.&#34;
                    <br />
                    <br />~ Qaidjohar Jukker, Student
                  </Typography>
                </CardContent>
              </Card>
              <Card className="testimonialCard">
                <CardContent>
                  <Typography variant="body1" className="testimonialContent">
                    &#34;As an administrator, BookFlow has improved our library operations tremendously. It{"'"}s a
                    must-have tool.&#34; <br />
                    <br />~ Adarsh Regar, Administrator
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>
          <Typography variant="body1" className="contentText" paragraph>
            Join us and explore a world of knowledge and imagination with BookFlow Library.
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
