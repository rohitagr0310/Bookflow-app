import React from "react";
import Header from "./header/Header";
import "./_HomePage.css";
import background1 from "../../images/background.jpg";
import background2 from "../../images/background2.jpg";
import background3 from "../../images/background3.jpg";
import background4 from "../../images/background4.jpg";

const HomePage = () => {
  const testimonials = [
    {
      name: "Qaidjohar Jukker",
      quote: "This website changed my life. I can't believe how amazing it is!"
    },
    {
      name: "Ankit Kangaale",
      quote: "I've been using this website for years, and it never disappoints."
    },
    {
      name: "Anishka Jain",
      quote: "The content on this website is top-notch. I recommend it to everyone."
    }
  ];
  return (
    <div className="root">
      <Header />
      <div className="page">
        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 1)), url(${background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>
        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8)), url(${background2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>

        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8)), url(${background3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>

        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 1)), url(${background4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>
        <section
          className="section testimonialCards"
          style={{
            backgroundImage: "linear-gradient(to right, #000000, #2e2e2e, #585858, #878787, #b9b9b9, #b9b9b9, #b9b9b9, #b9b9b9, #878787, #585858, #2e2e2e, #000000)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
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
      </div>
    </div>
  );
};

export default HomePage;
