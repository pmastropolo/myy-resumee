import React, { useState } from 'react';                          // Import React and useState
import './Certificate.css';                                       // Import the certificate CSS file
import certificateImage from '/images/certificate.jpg';           // Import google seo certificate image
import youtubeCertificateImage from '/images/youtubecertificate.jpg'; // Import youtube seo certificate image
import digitalmarketingImage from '/images/digitalmarketingimage.jpg';

function Certificate() {
  // DEFINE CERTIFICATE LINK
  const certificateLink = "https://www.coursera.org/account/accomplishments/verify/LAUP7GWA35JH?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=courseimport";
  const youtubeCertificateLink = "https://alison.com/certification/check/2y10LzMI5IaKz4jRmqidA2wnem1rUVKwDkR9sUFXe5MInFJRwDhhBfQ";
  const digitalMarketing = "https://coursera.org/share/407398509971b622d71378073ac631fa";

  // CREATE STATE VARIABLE FOR CERTIFICATE LINK
  const [certificate, setCertificate] = useState(certificateLink);

  return (
    /* CERTIFICATE CONTAINER */
    <div className="certificate-container">

  
 {/* SEO CERTIFICATES */}
<div className="certificate-line">
  <h3><b>Certificates - Digital Marketing & SEO</b></h3>
</div>

{/* GOOGLE SEO FUNDAMENTALS CERTIFICATE */}
<div className="certificate-details">
<h3><b>Google SEO Fundamentals</b></h3>
<p>- Completed a competitive analysis on a webpage</p>
<p>- Interpreted brand recognition through social media</p>
<p>- Created sitemaps and robot.txt files, planned redirects, and managed site errors</p>
<p>- Used a variety of SEO tools to conduct an audience analysis and develop personas of ideal buyers</p>
<br></br>
<p><b>Skills</b> | Social Media | Keyword Research | Marketing | Mathematical Optimization</p>
</div>

{/* CERTIFICATE IMAGE */}
<img className="certificate-image" src={certificateImage} alt="Certificate" />
{/* VIEW CERTIFICATE LINK */}
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

<br></br>
<br></br>
{/* YouTube Marketing and YouTube SEO Fundamentals CERTIFICATE */}
<div className="certificate-details">
<h3><b>YouTube Marketing and YouTube SEO Fundamentals </b></h3>
<p>- Mastered YouTube SEO principles, including SEO, SERP, and keyword research.</p>
<p>- Acquired tactics to boost video views and attract subscribers.</p>
<p>- Explored effective YouTube video marketing strategies for online visibility.</p>
<p>- Proficient in maximizing video reach using YouTube's algorithms.</p>
<br></br>
<p><b>Skills</b> Digital Marketing | Social Media Marketing </p>
</div>

  {/* YouTube SEO CERTIFICATE IMAGE */}
<img className="certificate-image" src={youtubeCertificateImage} alt="YouTube SEO Certificate" />

{/* VIEW CERTIFICATE LINK FOR YOUTUBE SEO */}
<div className="certificate-link">
  <a
    href={youtubeCertificateLink}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For YouTube SEO Fundamentals</b>
  </a>
</div>


<br></br>
<br></br>
{/* Foundations of Digital Marketing and E-commerce CERTIFICATE */}
<div className="certificate-details">
<h3><b>Foundations of Digital Marketing and E-commerce</b></h3>

<p>- Defined the fields of digital marketing and e-commerce.</p>
<p>- Described the job responsibilities of an entry-level digital marketer and e-commerce specialist.</p>
<p>- Explained the concept of a marketing funnel.</p>
<p>- Understood the elements and goals of a digital marketing and e-commerce strategy.</p>
<br></br>
<p><b>Skills</b> E-Commerce | Customer loyalty | Customer Outreach | Marketing | Marketing Analytics</p>
</div>

  {/* Foundations of Digital Marketing and E-commerce IMAGE */}
<img className="certificate-image" src={digitalmarketingImage} alt="YouTube SEO Certificate" />

{/* VIEW CERTIFICATE LINK FOR Foundations of Digital Marketing and E-commerce */}
<div className="certificate-link">
  <a
    href={digitalMarketing}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For Foundations of Digital Marketing and E-commerce</b>
  </a>
</div>   




    </div>
  );
}

export default Certificate; 