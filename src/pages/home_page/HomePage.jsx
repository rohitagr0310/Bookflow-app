import React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./header/Header";
import "./_HomePage.css";
import background1 from "../../images/background1.jpg"; // Import your images
import background2 from "../../images/background2.jpg"; // Import your images
import background3 from "../../images/background3.jpg"; // Import your images
import background4 from "../../images/background4.jpg"; // Import your images

const theme = createTheme();

const HomePage = () => {
  const testimonials = [
    {
      name: "Jordy",
      quote: "This website changed my life. I can't believe how amazing it is!"
    },
    {
      name: "Ankit Jain",
      quote:
        "I've been using this website for years, and it never disappoints."
    },
    {
      name: "Jayesh Ji Joshi",
      quote:
        "The content on this website is top-notch. I recommend it to everyone."
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <Header />
        <Container maxWidth="lg">
          {/* Section 1 with Slider */}
          <section
            className="section"
            style={{
              backgroundImage: `url(${background1})`,
              backgroundSize: "cover", // Set the background size
              backgroundPosition: "center",
              height: "70vh"
            }}
          >
            {/* Add content for Section 1 here */}
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
            {/* Add content for Section 2 here */}
          </section>

          {/* Section 3 */}
          <section
            className="section"
            style={{
              backgroundImage: `url(${background3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh"
            }}
          >
            {/* Add content for Section 3 here */}
          </section>

          {/* Section 4 */}
          <section
            className="section"
            style={{
              backgroundImage: `url(${background4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh"
            }}
          >
            {/* Add content for Section 4 here */}
          </section>
          {/* Section for Testimonials */}
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
