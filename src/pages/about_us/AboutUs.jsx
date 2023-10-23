// AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Import your CSS file for styling
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../../components/header/Header";
import image from "../../images/jaye.jpg";
import image1 from "../../images/qaidj.jpg";
import image2 from "../../images/rohit.jpg";
import image3 from "../../images/anshi.jpg";
import image4 from "../../images/ankit.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">The Team Behind Book-Flow</h2>
            </div>
          </div>
          <div className="row">
            {/* First Row */}
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={image2} className="team-img" alt="pic" />
                <h3>Rohit Agarwal</h3>
                <div className="team-info">
                  <p>Solution Architecture</p>
                </div>
                <ul className="team-icon">
                  <li>
                    <a
                      href="https://github.com/rohitagr0310"
                      className="github"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/_rohitagar2610_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                      className="instagram"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rohit-agarwal-27285824a/"
                      className="linkedin"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Recommended for security
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={image3} className="team-img" alt="pic" />
                <h3>Anshika Jain</h3>
                <div className="team-info">
                  <p>Software Developement Manager</p>
                </div>
                <ul className="team-icon">
                  <li>
                    <a
                      href="https://github.com/jain-anshika"
                      className="github"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/jain_anshika__?igshid=OGQ5ZDc2ODk2ZA=="
                      className="instagram"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anshika-jain-85a638255/"
                      className="linkedin"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={image1} className="team-img" alt="pic" />
                <h3>Qaidjohar Jukker</h3>
                <div className="team-info">
                  <p>QA Manager</p>
                </div>
                <ul className="team-icon">
                  <li>
                    <a
                      href="https://github.com/qaidjoharj53"
                      className="github"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/qaidjoharjukker53"
                      className="instagram"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/qaidjoharj53/"
                      className="linkedin"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Recommended for security
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Second Row */}
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={image4} className="team-img" alt="pic" />
                <h3>Ankit Dhanawat</h3>
                <div className="team-info">
                  <p>Full Stack Developer</p>
                </div>
                <ul className="team-icon">
                  <li>
                    <a
                      href="https://github.com/jainankit0811"
                      className="github"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ankit_jain__002/"
                      className="instagram"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ankit-dhanawat-7556b3263/"
                      className="linkedin"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Recommended for security
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={image} className="team-img" alt="pic" />
                <h3>Jayesh Joshi</h3>
                <div className="team-info">
                  <p>Full Stack Developer</p>
                </div>
                <ul className="team-icon">
                  <li>
                    <a
                      href="https://github.com/jayesh2474"
                      className="github"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="instagram"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jayesh-joshi-1b7261250/"
                      className="linkedin"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Recommended for security
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
