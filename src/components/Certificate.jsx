import React, { useState } from 'react';
import './Certificate.css';
import certificateImage from '/images/certificate.jpg';

function Certificate() {
  const certificateLink = "https://www.coursera.org/account/accomplishments/verify/LAUP7GWA35JH?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=courseimport";
  const [certificate, setCertificate] = useState(certificateLink);

  return (
    <div className="certificate-container">
      <h2>Certificates</h2>

      <div className="certificate-details">
        <h3><b>Google SEO Fundamentals</b></h3>
        <p>- Completed a competitive analysis on a webpage</p>
        <p>- Interpreted brand recognition through social media</p>
        <p>- Created sitemaps and robot.txt files, planned redirects, and managed site errors</p>
        <p>- Used a variety of SEO tools to conduct an audience analysis and develop personas of ideal buyers</p>
        <p><b>Skills</b> | Social Media | Keyword Research | Marketing | Mathematical Optimization</p>
      </div>

      <img className="certificate-image" src={certificateImage} alt="Certificate" />

      <div className="certificate-link">
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          <b>View Certificate For Google SEO Fundamentals For Peyton Mastropolo</b>
        </a>
      </div>

      <div className="certificate-line">
        <h3><b>Full Stack Web Development</b></h3>
      </div>

      <div className="certificate-details">
        <p><b>Web Development Skills</b></p>
        <p>- Proficient in both front-end and full-stack web development.</p>
        <p>- Experienced in creating websites from scratch and using frameworks.</p>
        <p>- Skilled in building responsive user interfaces.</p>
        <p>- Capable of developing single-page web applications with RESTful APIs.</p>
        <p>- Proficient in working with databases for dynamic web content.</p>
        <p>- Well-prepared for technical interviews with a strong foundation in computer science.</p>
        <br></br>
        <p><b>Collaboration and Industry Practices</b></p>
        <p>- Demonstrated expertise in social coding practices (Git, issue tracking).</p>
        <p>- Proven ability to work effectively in teams and independently.</p>
        <p>- Strong project management skills.</p>

        <div class="websskills">
          <p><b>Skills</b></p>
          <p>HTML | CSS | Git | JavaScript | Bootstrap | The DOM | APIs | JQuery | JSON | AJAX | Team Collaboration | Agile 
          Development | Project Demonstration & Storytelling | Node | ES6 | Object-oriented programming | Express |
          MySQL | MVC Paradigm | Sequelize | Jest | Insomnia | Agile Development | Progressive Web Apps | React |
          NoSQL | MERN Stack | Computer Science Fundamentals</p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
