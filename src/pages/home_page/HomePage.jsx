import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
