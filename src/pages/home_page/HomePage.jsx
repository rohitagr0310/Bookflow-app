import React from "react";
import Header from "./header/Header";
import "./_HomePage.css";
// import background1 from "../../images/background.jpg";
// import testimonialbg from "../../images/new3.png";
// import quote from "../../images/quote.png";
import img1 from "../../images/vector1.png";
import img2 from "../../images/vector2.png";
import img3 from "../../images/vector5.png";
const HomePage = () => {
  const testimonials = [
    {
      name: "Anshika Jain",
      quote: "I've been using this website for years, and it never disappoints."
    },
    {
      name: "Qaidjohar Jukker",
      quote: "This website changed my life. I can't believe how amazing it is!"
    },
    {
      name: "Rohit Agrawal",
      quote: "The content on this website is top-notch. I recommend it to everyone."
    }
  ];
  return (
    <div className="root">
      <Header />
      <div className="page">
        <section
          className="section section1"
          style={{
            backgroundColor: "whitesmoke"
          }}
        >
          <div className="sectionContent" style={{
            minHeight: "60vh",
            marginTop: "5vh"
          }}>
            <h1 className="sectionHeading mainHeading">
              Welcome to BookFlow
            </h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <p style={{
                marginBottom: "50px",
                marginTop: "-20px",
                fontSize: "1.4rem"
              }}>
                Your Literary Oasis!
              </p>
            </div>
            <a href="#more" className="button">
              KNOW MORE
            </a>
          </div>
        </section>
        <section id="more" className="section" style={{
          backgroundColor: "#68967D",
          color: "white"
        }}>
          <div style={{
            maxWidth: "80vw"
          }}>
            <p className="sectionText" style={{ color: "white" }}>
              Step into a world where pages breathe life into imagination and stories dance with every click.
              BookFlow invites you to embark on a literary journey like no other.
              Whether you&apos;re a passionate reader or a diligent administrator, our webapp is your gateway to boundless realms of knowledge and creativity.
            </p>

            <p className="sectionText" style={{ color: "white" }}>
            Dive into a sea of meticulously cataloged books, a treasure trove that spans genres, continents, and centuries.
            Admins, take the helm and navigate with ease, managing your library&apos;s every facet.
            Readers, discover new horizons, connect with fellow bibliophiles, and embark on literary adventures together. With BookFlow, literature comes to life, and your journey begins here. Welcome home.
            </p>

            <ul>
              <li>We are a one-stop destination for all your book needs.</li>
              <li>We have a wide range of books for you to choose from.</li>
              <li>Your search for the best books ends here</li>
            </ul>
          </div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#FFD793"
          }}
        >
          <div className="sectionContent">
            <div className="sectionContentContainer" style={{ display: "flex", alignItems: "center", width: "80vw", justifyContent: "space-evenly" }}>
              <div className="sectionTextContainer" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                <h2 className="sectionHeading" style={{ width: "80%", textAlign: "left" }}>Effortless QR Code Scanning</h2>
                <p className="sectionText" style={{ maxWidth: "800px", width: "auto" }}>
                  BookFlow takes convenience to the next level with seamless QR code scanning. Now, borrowing a book is as simple as pointing your device at the book&apos;s QR code. Our advanced scanning technology instantly recognizes the book,
                  allowing you to check it out with just a tap.
                </p>
                <p className="sectionText" style={{ maxWidth: "800px", width: "auto" }}>Say goodbye to long queues and paperwork. Whether you&apos;re in the library or browsing our vast online catalog,
                 QR code scanning makes borrowing books a breeze.</p>
              </div>
              <div className="imageContainer" style={{ flex: "1", textAlign: "center" }}>
                <img src={img1} alt="Image Description" width={"60%"}/>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#FFFFFF"
          }}
        >
          <div className="sectionContent">
            <div className="sectionContentContainer" style={{ display: "flex", alignItems: "center", width: "80vw", justifyContent: "space-evenly" }}>
              <div className="imageContainer" style={{ flex: "1", textAlign: "left" }}>
                <img src={img2} alt="Image Description" width={"60%"}/>
              </div>
              <div className="sectionTextContainer" style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                <h2 className="sectionHeading" style={{ textAlign: "left" }}>All-in-One Book Management</h2>
                <p className="sectionText" style={{ width: "auto" }}>
                  BookFlow isn&apos;t just about reading; it&apos;s about managing your entire literary journey. Our web app empowers you to search, choose, and issue books all from one place. No more jumping between apps or websites. Everything you
                  need is right here.
                </p>
                <p className="sectionText" style={{ width: "auto" }}>
                  Explore our extensive library, read book summaries, and make informed decisions. Once you&apos;ve found the perfect book, issue it instantly. The days of multiple logins and complicated procedures are over. BookFlow simplifies it
                  all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#68967D"
          }}
        >
          <div className="sectionContent">
            <div className="sectionContentContainer" style={{ display: "flex", alignItems: "center", width: "80vw", justifyContent: "space-evenly" }}>
              <div className="sectionTextContainer" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                <h2 className="sectionHeading" style={{ width: "80%", textAlign: "left", color: "white" }}>Your Reading History</h2>
                <p className="sectionText" style={{ maxWidth: "800px", width: "auto", color: "white" }}>
                  BookFlow cares about your reading journey, and that&apos;s why we offer a personalized experience like no other. With our web app, you can easily access your reading history. See which books you&apos;ve borrowed, which ones
                  you&apos;ve returned, and even track your favorite genres.
                </p>
                <p className="sectionText" style={{ maxWidth: "800px", width: "auto", color: "white" }}>It&apos;s your literary journey, beautifully organized in one place.
                BookFlow ensures that every chapter of your reading history is easily accessible and memorable.</p>
              </div>
              <div className="imageContainer" style={{ flex: "1", textAlign: "right" }}>
                <img src={img3} alt="Image Description" width={"60%"} />
              </div>
            </div>
          </div>
        </section>

        <section
          className="section testimonialCards"
          style={{
            backgroundColor: "white"
          }}
        >
          <div className="sectionContent">
            <h2 className="sectionHeading" style={{ marginBottom: "50px" }}>
              Testimonials ~
            </h2>
            <div className="testimonialCardContainer">
              {testimonials.map((testimonial, index) => (
                <div className="testimonialCard" key={index}>
                  <p className="testimonialBg" style={{ color: index === 1 ? "#90C5A9" : "#FFD793" }}>&ldquo;</p>
                  <p className="testimonialContent">{testimonial.quote}</p>
                  <p className="testimonialDivider">~</p>
                  <p className="testimonialName">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
