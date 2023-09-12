// AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Import your CSS file for styling
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import image from "../../images/jaye.jpg";
import image1 from "../../images/qada.jpg";
import image2 from "../../images/rohit.jpg";
import image3 from "../../images/anshi.jpg";
import image4 from "../../images/ankit.jpg";

const AboutUs = () => {
  return (
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
                <p>Head of BookFlow</p>
              </div>
              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <FacebookIcon />
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
                <p>Purple Specialist</p>
              </div>
              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
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
                <p>Video Creator</p>
              </div>
              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                <p>HAGA Specialist</p>
              </div>
              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <FacebookIcon />
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
                <p>Marketing Manager</p>
              </div>
              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
  );
};

export default AboutUs;
