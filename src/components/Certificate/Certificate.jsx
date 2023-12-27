import React, { useState } from 'react';                                  // Import React and useState
import './Certificate.css';                                               // Import the certificate CSS file
import certificateImage from '/images/certificate.jpg';                   // Import google seo certificate image
import youtubeCertificateImage from '/images/youtubecertificate.jpg';     // Import youtube seo certificate image
import digitalmarketingImage from '/images/digitalmarketingimage.jpg';    // Import digital marketing certificate image
import wixseo from '/images/wixseofundamentalcert.jpg';                   // Import wix seo certificate image
import cybergoogle from '/images/googlefoundationsofcybersecurity.jpg';                 // Import Foundations of cybersecurity image
import parttwogooglecyberimage from '/images/parttwoplayitsafegooglecyber.jpg';         // Import Part 2 Google Cybersecurity, Plat it safe, manage security risks image certificate
import partthreecybergoogleimage from '/images/partthreegooglecybercertimage.jpg';      // Import part 3 google cyber security image
import designartimage from '/images/designartcertimage.jpg';                            // Import Fashion as Design Cert Image
import parttwogoogleseoimageee from '/images/googleseoparttwo.jpg';                          // Import Part 2 Google SEO image certificate

function Certificate() {
  
// DEFINE CERTIFICATE LINK
const certificateLink = "https://www.coursera.org/account/accomplishments/verify/LAUP7GWA35JH?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=courseimport";
const youtubeCertificateLink = "https://alison.com/certification/check/2y10LzMI5IaKz4jRmqidA2wnem1rUVKwDkR9sUFXe5MInFJRwDhhBfQ";
const digitalMarketing = "https://coursera.org/share/407398509971b622d71378073ac631fa";
const wixseoCertificate = "https://www.coursera.org/account/accomplishments/verify/L2Z8AUD9KMDZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project";
const cybergooglelinkcourse = "https://coursera.org/share/273a5d8a71f8afde932977befb6c607f";
const parttwogooglecyber = "https://coursera.org/share/ac3495d4622049606f6091b6455dba6c";
const partthreegooglecyber = "https://coursera.org/share/3b8e3b8290b5991992636c60e5f9fb59";
const designartcourse = "https://coursera.org/share/faf8237cb9e266b3b2ddb10dde74d790";
const parttwogoogleseolink = "https://coursera.org/share/08f9becd67e2dc1b631abd7c46b85fb8";

  // CREATE STATE VARIABLE FOR CERTIFICATE LINK
  const [certificate, setCertificate] = useState(certificateLink);

  return (
    /* CERTIFICATE CONTAINER */
    <div className="certificate-container">

  
 {/* SEO CERTIFICATES */}
<div className="certificate-line">
  <h3><b>Certificates - Digital Marketing & SEO</b></h3>
</div>

{/* Introduction to Google SEO CERTIFICATE */}
<div className="certificate-details">
<h3><b>Introduction to Google SEO</b></h3>
<p>- Conducted an in-depth analysis of the impact of advertisements and corporate investments on search engine development, focusing on ethical considerations and commercial influences.</p>
<p>- Evaluated the evolution of search engine algorithms, comparing and contrasting various updates to understand their impact on search result accuracy and relevance.</p>
<p>- Developed unique web content optimized for search engines, employing SEO strategies to improve website visibility and search result rankings.</p>
<p>- Devised comprehensive optimization strategies for clients, incorporating industry best practices to enhance their search engine rankings and online presence.</p>
<br></br>
<p><b>Skills</b> | Search Algorithm | Search Engine Optimization (SEO) | Semantics | Mathematical Optimization</p>
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
    <b>View Certificate For Introduction to Google SEO For Peyton Mastropolo</b>
  </a>
</div>

<br></br>
<br></br>

{/* Google SEO Fundamentals CERTIFICATE */}
<div className="certificate-details">
<h3><b>Google SEO Fundamentals</b></h3>
<p>- Conducted comprehensive competitive analyses of webpages, evaluating key metrics and strategies to inform and enhance digital marketing initiatives.</p>
<p>- Proficient in analyzing social media trends and engagement to assess and interpret brand recognition, contributing to effective brand positioning and marketing strategies.</p>
<p>- Skilled in creating and managing technical SEO elements including sitemaps, robots.txt files, planning redirects, and addressing site errors to optimize website performance.</p>
<p>- Utilized a range of SEO tools for in-depth audience analysis, successfully developing buyer personas to guide targeted and effective marketing strategies.</p>
<br></br>
<p><b>Skills</b> | Social Media | Keyword Research | Marketing | Mathematical Optimization</p>
</div>

{/* CERTIFICATE IMAGE */}
<img className="certificate-image" src={parttwogoogleseoimageee} alt="Certificate" />
{/* VIEW CERTIFICATE LINK */}
<div className="certificate-link">
  <a
    href={parttwogoogleseolink}
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

<br></br>
<br></br>
{/* Brand Marketing and SEO Tools using Wix CERTIFICATE */}
<div className="certificate-details">
<h3><b>Brand Marketing and SEO Tools using Wix</b></h3>
<p>- Demonstrated the ability to create and manage Wix accounts efficiently.</p>
<p>- Established expertise in designing and developing a professional website using the Wix platform.</p>
<p>- Acquired skills in crafting visually appealing and brand-appropriate logos through Wix's Logo Builder.</p>
<p>- Applied design principles to create a cohesive brand identity.
<p>- Demonstrated proficiency in using Wix tools to design engaging and shareable social media posts.</p>
<p>- Gained hands-on experience in crafting impactful videos, contributing to a well-rounded digital marketing skill set.</p>
</p>
<br></br>
<p><b>Skills</b> Brand Design | Web Marketing | Brand Marketing </p>
</div>

  {/* Brand Marketing and SEO Tools using Wix CERTIFICATE IMAGE */}
<img className="certificate-image" src={wixseo} alt="Wix SEO and brand marketing certificate" />

{/* VIEW CERTIFICATE LINK FOR Brand Marketing and SEO Tools using Wix */}
<div className="certificate-link">
  <a
    href={wixseoCertificate}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For Brand Marketing and SEO Tools using Wix</b>
  </a>
</div>




{/* CYBERSECUIRTY CERTIFICATES */}
<div className="certificate-line">
  <h3><b>Certificates - Cybersecurity</b></h3>
</div>

{/* Foundations of Cybersecurity CERTIFICATE */}
<div className="certificate-details">
<h3><b>Foundations of Cybersecurity</b></h3>
<p>- Recognized core skills and knowledge needed to become a cybersecurity analyst.</p>
<p>- Able to identify how security attacks impact business operations.</p>
<p>- Able to identify common tools and explain security ethics used by cybersecurity analysts.</p>
<br></br>
<p><b>Skills</b> | Cyber Security | Historical Attacks | Ethics in Cybersecurity | NIST Cybersecurity Framework (CSF) | Information Security (INFOSEC)</p>
</div>

{/* CERTIFICATE IMAGE */}
<img className="certificate-image" src={cybergoogle} alt="Certificate" />
{/* VIEW CERTIFICATE LINK */}
<div className="certificate-link">
  <a
    href={cybergooglelinkcourse}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For Foundations of Cybersecurity For Peyton Mastropolo</b>
  </a>
</div>
<br></br>
<br></br>

{/* Play It Safe: PART TWO: Manage Security Risks CERTIFICATE */}
<div className="certificate-details">
<h3><b>Play It Safe: Manage Security Risks</b></h3>
<p>- Adept at using playbooks for effective response to identified threats, risks, and vulnerabilities. Experienced in crafting and executing strategic responses to mitigate the impact of security incidents on business continuity.</p>
<p>- Demonstrated expertise in identifying primary threats, risks, and vulnerabilities impacting business operations. Proficient in analyzing potential security breaches and proactive in developing strategies to mitigate risks.</p>
<p>- Skilled in examining and employing various security frameworks and controls to safeguard business operations. Experienced in implementing industry-standard practices to ensure organizational resilience against cyber threats.</p>
<p>- Well-versed in defining and utilizing commonly used SIEM tools. Capable of leveraging these tools for real-time analysis of security alerts generated by applications and network hardware.</p>
<br></br>
<p><b>Skills</b> | Incident Response Playbooks | NIST Cybersecurity Framework (CSF) | Security Audits | Information Security (INFOSEC) | NIST Risk Management Framework (RMF) </p>
</div>

{/* CERTIFICATE IMAGE */}
<img className="certificate-image" src={parttwogooglecyberimage} alt="Certificate" />
{/* VIEW CERTIFICATE LINK */}
<div className="certificate-link">
  <a
    href={parttwogooglecyber}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For Manage Security Risks For Peyton Mastropolo</b>
  </a>
</div>
<br></br>
<br></br>

{/* Connect and Protect: Networks and Network Security CERTIFICATE */}
<div className="certificate-details">
<h3><b>Connect and Protect: Networks and Network Security</b></h3>
<p>- Gained comprehensive knowledge of various network types and their components. Proficient in identifying and defining the roles and functions of network devices and infrastructure.</p>
<p>- Developed the ability to illustrate the process of data transmission over networks. Skilled in explaining the methodologies of how data is sent and received, including understanding of protocols and communication standards.</p>
<p>- Acquired in-depth understanding of securing networks against various intrusion tactics. Trained in recognizing potential vulnerabilities and implementing effective security measures to safeguard network integrity.</p>
<p>- Learned and described various system hardening techniques. Capable of enhancing the security of systems through rigorous configuration and proactive protective measures.</p>
<br></br>
<p><b>Skills</b> | Network Security | Security Hardening | Network Architecture | Cloud Networks | Transmission Control Protocol / Internet Protocol (TCP/IP) </p>
</div>

{/* CERTIFICATE IMAGE */}
<img className="certificate-image" src={partthreecybergoogleimage} alt="Certificate" />
{/* VIEW CERTIFICATE LINK */}
<div className="certificate-link">
  <a
    href={partthreegooglecyber}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For Networks and Network Security For Peyton Mastropolo</b>
  </a>
</div>
<br></br>
<br></br>

{/* DESIGN CERTIFICATES */}
<div className="certificate-line">
  <h3><b>Certificates - Design</b></h3>
</div>

{/* Modern and Contemporary Art and Design Specialization CERTIFICATE */}
<div className="certificate-details">
<h3><b>Modern and Contemporary Art and Design Specialization</b></h3>
<p>- Acquired in-depth knowledge of artists' and designers' creative processes, emphasizing their experimentation methods and adaptation to technological advancements.</p>
<p>- Enhanced critical thinking and observational skills, enabling a nuanced understanding of how artists and designers address social and cultural issues through their work.</p>
<p>- Developed proficiency in analyzing and discussing modern and contemporary art and design, drawing inspiration from diverse artistic expressions in everyday life.</p>
<p>- Gained insights into personal fashion choices, focusing on expression and identity, while understanding the impact of labor practices and sustainability in the fashion industry.</p>
<br></br>
<p><b>Skills</b> | Design | Art | History | Photography | Museums </p>
</div>

{/* CERTIFICATE IMAGE */}
<img className="certificate-image" src={designartimage} alt="Certificate" />
{/* VIEW CERTIFICATE LINK */}
<div className="certificate-link">
  <a
    href={designartcourse}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Certificate For Modern and Contemporary Art and Design For Peyton Mastropolo</b>
  </a>
</div>
<br></br>
<br></br>



    </div>
  );
}

export default Certificate; 