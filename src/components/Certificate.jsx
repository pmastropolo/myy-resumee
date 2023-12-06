import React from 'react';
import './Certificate.css';
import certificateImage from './assets/public/images/IMG_4565.png';

function Certificate() {
  return (
    <div className="certificate-section">
      <h2>Google SEO Fundamentals</h2>
      <img className="certificate-image" src={certificateImage} alt="Certificate" />
    </div>
  );
}

export default Certificate
