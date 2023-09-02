import React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import Header from "./header/Header";
import "./_HomePage.css";
import background1 from "../../images/background1.jpg";
import background2 from "../../images/background2.jpg";
import background3 from "../../images/background3.jpg";
import background4 from "../../images/background4.jpg";

let theme = createTheme();

theme = responsiveFontSizes(theme); // Optionally, enable responsive font sizes

theme = createTheme({
  ...theme,
  overrides: {
    MuiContainer: {
      root: {
        [theme.breakpoints.up("sm")]: {
          padding: 0 // Set padding to zero for screens wider than 600px
        }
      }
    }
  }
});

const HomePage = () => {
  const testimonials = [
    {
      name: "Qaidjohar Jukker(jordy)",
      quote: "This website changed my life. I can't believe how amazing it is!"
    },
    {
      name: "Ankit Kangaale",
      quote:
        "I've been using this website for years, and it never disappoints."
    },
    {
      name: "Jayesh",
      quote:
        "The content on this website is top-notch. I recommend it to everyone."
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <Header />
        <Container className="page">
          <section
            className="section-no-padding-margin"
            style={{
              backgroundImage: `url(${background1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "70vh"
            }}
          >
            {/* Section content */}
          </section>
          <section
            className="section"
            style={{
              backgroundImage: `url(${background2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh"
            }}
          >
          </section>

          <section
            className="section"
            style={{
              backgroundImage: `url(${background3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh"
            }}
          >
          </section>

          <section
            className="section"
            style={{
              backgroundColor: "#CBF1F5",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh"
            }}
          >
          </section>

          <section
            className="section"
            style={{
              backgroundImage: `url(${background4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh"
            }}
          >
          </section>
          <section className="section testimonialCards">
            <h2 className="sectionHeading">What Our Users Say</h2>
            <div className="testimonialCardContainer">
              {testimonials.map((testimonial, index) => (
                <div className="testimonialCard" key={index}>
                  <p className="testimonialContent">{testimonial.quote}</p>
                  <p className="testimonialName">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
