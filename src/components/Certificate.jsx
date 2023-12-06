import React from 'react';
import './Certificate.css';
import certificateImage from './stc/assets/public/images/IMG_4565.png';

function Certificate() {
  return (
    <div className="certificate-section">
      <h2>Google SEO Fundamentals</h2>

      <div className="certificate-details">
        <p>Completed a competitive analysis on a webpage</p>
        <p>Interpreted brand recognition through social media</p>
        <p>Created sitemaps and robot.txt files, plan redirects, and managed site errors</p>
        <p>Used a variety of SEO tools to conduct an audience analysis and develop personas of ideal buyer</p>

        <h3>Skills</h3>
        <p>Social Media</p>
        <p>Keyword Research</p>
        <p>Marketing</p>
        <p>Mathematical Optimization</p>
      </div>

      <img className="certificate-image" src={certificateImage} alt="Certificate" />
    </div>
  );
}

export default Certificate;
