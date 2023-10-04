import React from "react";
import Header from "./header/Header";
import "./_HomePage.css";
import background1 from "../../images/background.jpg";
import testimonialbg from "../../images/new3.png";
import quote from "../../images/quote.png";
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
          className="section"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="sectionContent">
            <h1 className="sectionHeading" style={{ color: "#fff" }}>
              Welcome to BookFlow: Your Literary Oasis!
            </h1>
            <p className="sectionText" style={{ color: "#eee9da", textAlign: "center" }}>
              Step into a world where pages breathe life into imagination and stories dance with every click. BookFlow invites you to embark on a literary journey like no other. Whether you&apos;re a passionate reader or a diligent administrator, our
              webapp is your gateway to boundless realms of knowledge and creativity. Dive into a sea of meticulously cataloged books, a treasure trove that spans genres, continents, and centuries. Admins, take the helm and navigate with ease,
              managing your library&apos;s every facet. Readers, discover new horizons, connect with fellow bibliophiles, and embark on literary adventures together. With BookFlow, literature comes to life, and your journey begins here. Welcome home.
            </p>
            <p className="sectionText" style={{ color: "#eee9da" }}>
              We are a one-stop destination for all your book needs.
            </p>
            <p className="sectionText" style={{ color: "#eee9da" }}>
              We have a wide range of books for you to choose from.
            </p>
            <p className="sectionText" style={{ color: "#eee9da" }}>
              Your search for the best books ends here...
            </p>
          </div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#BBBFCA",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="sectionContent">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: "1" }}>
                <h2 className="sectionHeading">Effortless QR Code Scanning</h2>
                <p className="sectionText">
                  BookFlow takes convenience to the next level with seamless QR code scanning. Now, borrowing a book is as simple as pointing your device at the book&apos;s QR code. Our advanced scanning technology instantly recognizes the book,
                  allowing you to check it out with just a tap.
                </p>
                <p className="sectionText">Say goodbye to long queues and paperwork. Whether you&apos;re in the library or browsing our vast online catalog, QR code scanning makes borrowing books a breeze.</p>
              </div>
              <div style={{ flex: "1", textAlign: "right" }}>
                <img src={img1} alt="Image Description" width={"80%"}/>
              </div>
            </div>
          </div>
          <div className="sectionDivider"></div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#BBBFCA",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="sectionContent">
            <div style={{
              display: "flex",
              alignItems: "center"
            }}>
              <div style={{ flex: "1", textAlign: "left" }}>
                <img src={img2} alt="Image Description" width={"80%"}/>
              </div>
              <div style={{ flex: "1" }}>
                <h2 className="sectionHeading">All-in-One Book Management</h2>
                <p className="sectionText">
                  BookFlow isn&apos;t just about reading; it&apos;s about managing your entire literary journey. Our web app empowers you to search, choose, and issue books all from one place. No more jumping between apps or websites. Everything you
                  need is right here.
                </p>
                <p className="sectionText">
                  Explore our extensive library, read book summaries, and make informed decisions. Once you&apos;ve found the perfect book, issue it instantly. The days of multiple logins and complicated procedures are over. BookFlow simplifies it
                  all.
                </p>
              </div>
            </div>
          </div>
          <div className="sectionDivider"></div>
        </section>
        <section
          className="section"
          style={{
            backgroundColor: "#BBBFCA",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="sectionContent">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: "1" }}>
                <h2 className="sectionHeading">Your Reading History</h2>
                <p className="sectionText">
                  BookFlow cares about your reading journey, and that&apos;s why we offer a personalized experience like no other. With our web app, you can easily access your reading history. See which books you&apos;ve borrowed, which ones
                  you&apos;ve returned, and even track your favorite genres.
                </p>
                <p className="sectionText">It&apos;s your literary journey, beautifully organized in one place. BookFlow ensures that every chapter of your reading history is easily accessible and memorable.</p>
              </div>
              <div style={{ flex: "1", textAlign: "right" }}>
                <img src={img3} alt="Image Description" width={"80%"} />
              </div>
            </div>
          </div>
        </section>

        <section
          className="section testimonialCards"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) , url(${testimonialbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "120vh"
          }}
        >
          <div className="sectionContent">
            <h2 className="sectionHeading" style={{ letterSpacing: 10, color: "#fff" }}>
              TESTIMONIALS
            </h2>
            <div className="testimonialCardContainer">
              {testimonials.map((testimonial, index) => (
                <div className="testimonialCard" key={index}>
                  <img src={quote} alt="Quotation Mark" className="quoteImage" />
                  <p className="testimonialContent">{testimonial.quote}</p>
                  <p className="testimonialName">~{testimonial.name}</p>
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
