import React from 'react';
import './Resume.css'; 
import capstoneImage from '/images/dentalassistant.jpg';  
import americanhighschoolImage from '/images/americanhighschooldiploma.jpg';
import fullstackwebdevImage from '/images/full-stack-developer.png';

function Resume() {
  const fullstackwebdevlink="https://www.credly.com/badges/ee7acb59-973c-49af-b764-e85f43766d3c/public_url";
return (

<div className="resume-container">
<h1>Peyton Mastropolo Resume</h1>
<div className="resume-item">
<h2><a className="resume-link" href="https://github.com/pmastropolo" target="_blank" rel="noopener noreferrer">Github Profile: pmastropolo (Peyton Mastropolo)</a></h2>
<h2><a className="resume-link" href="https://www.linkedin.com/in/peyton-mastropolo-9a569529a" target="_blank" rel="noopener noreferrer">LinkedIn Profile: linkedin.com/in/peyton-mastropolo-9a569529a</a></h2>
</div>

{/* EDUCATION RESUME SECTION */}  
<section className="resume-section">
<h2>Education</h2>

{/* UC DAVIS - FULL STACK WEB DEV PROGRAM */}  
<div className="experience-item">
<h3>UC Davis - Full Stack Web Dev Program</h3>
<p className="date">July 2023 - Nov 2023</p> 

{/* FULLSTACK WEB DEV EDUCATION DESCRIPTION */}  
<p><b>Full Stack Web Development Certification:</b> Earned a Full Stack Web Development Certificate from UC Davis Coding Boot Camp, specializing in JavaScript and computer science principles like algorithms and efficiency.</p>
<p><b>Technical Proficiency:</b> Developed proficiency in HTML/CSS, JavaScript/jQuery, responsive design, Bootstrap, and Handlebars.</p>
<p><b>Advanced Expertise:</b> Gained expertise in React.js, local storage (Session Storage and IndexedDB), and database management (MySQL and MongoDB).</p>
<p><b>MERN Stack Mastery:</b> Focused on server-side development, user authentication, and Progressive Web Applications (PWAs) while mastering the MERN stack.</p>
<p><b>API Interaction Skills:</b> Acquired skills in API interactions, including API, JSON, and AJAX.</p>
<p><b>Skills</b> | Coding | CSS | Data Structure | JavaScript | JQuery | Node.js | Algorithms | HTML</p>      
</div>

{/* FULL STACK WEB DEV BADGE IMAGE */}
<img className="education-image" src={fullstackwebdevImage} alt="Full Stack Developer Certificate" />

{/* VIEW FULL STACK WEB DEV CERTIFICATE LINK */}
<div className="certificate-link">
  <a
    href={fullstackwebdevlink}
    target="_blank"
    rel="noopener noreferrer"
    className="custom-link"
  >
    <b>View Badge For Full Stack Developer For Peyton Mastropolo</b>
  </a>
</div>

</section>

{/* CAPSTONE DENTAL ASSISTANT PROGRAM */}  
<section className="resume-section">  
<div className="experience-item">
<h3>C.A.P. Stone Dental Assisting Program</h3>
<p className="date">2816 Columbiana Road Vestavia, AL 35216</p>
<p className="date">March 2017</p>

{/* CAPSTONE DENTAL ASSISTANT PROGRAM DESCRIPTION */}         
<p><b>Hands-On Experience:</b> Acquired hands-on experience with state-of-the-art dental equipment.</p>
<p><b>Dental Knowledge:</b> Acquired in-depth knowledge of dental anatomy, radiography, and dental office procedures.</p>
<p><b>Chairside Proficiency:</b> Proficient in chairside assisting, sterilization procedures, and dental instrument management.</p>
<p><b>Treatment Room Preparation:</b> Developed skills in preparing treatment rooms and assisting dentists during procedures.</p>
<p><b>Patient-Centered Care:</b> Gained practical knowledge in providing compassionate and patient-centered care.</p>
<p><b>Infection Control:</b> Executed proper infection control measures for patient safety.</p>
<p><b>Communication Skills:</b> Developed strong communication skills to help patients feel comfortable and informed.</p>
<p><b>Record-Keeping Expertise:</b> Demonstrated attention to detail in recording treatment plans and patient histories.</p>
<p><b>Team Collaboration:</b> Understands the importance of effective communication in a dental care team.</p>
<p><b>Collaborative Work:</b> Worked collaboratively with dentists, dental hygienists, receptionists, and lab technicians.</p>    
</div>

{/* CAPSTONE DENTAL PROGRAM PHONE NUMBER, EMAIL, AND WEBSITE LINK */}
<p className="phone">
<a href="tel:(205) 561-8118">(205) 561-8118</a>
<a href="https://www.capstonedentalassisting.com/" target="_blank" rel="noopener noreferrer">C.A.P. Stone Dental Program Website</a>
<a href="mailto:cdapbham@gmail.com">cdapbham@gmail.com</a>
</p>

{/* C.A.P. STONE DENTAL ASSISTANT IMAGE */}
<img className="education-image" src={capstoneImage} alt="Capstone Dental Assistant Certificate" />

</section>

{/* AMERICAN HIGH SCHOOL EDUCATION */}
<section className="resume-section">
<div className="experience-item">
<h3>American High School  — High School Diploma</h3>
<p className="date">7777 Davie Rd Extension Hollywood, FL 33024</p>
<p className="date">August 2013 - May 2014</p>

{/* AMERICAN HIGH SCHOOL DESCRIPTION */}
<p><b>Well-Rounded Education:</b> Attained a well-rounded high school education in a nurturing environment, featuring a diverse curriculum encompassing math, science, humanities, and arts, with a focus on critical thinking.</p>
<p><b>Academic Achievement:</b> Successfully completed challenging coursework in line with state standards, preparing for future educational and career pursuits.</p>
</div>

{/* AMERICAN HIGH SCHOOL PHONE NUMBER, EMAIL, AND WEBSITE LINK */}
<p className="phone">
<a href="tel:866-936-9654">866-936-9654</a>
<a href="https://www.americanonlinehigh.com/" target="_blank" rel="noopener noreferrer">American High School Website</a>
<a href="mailto:info@AmericanHighSchool.org">info@AmericanHighSchool.org</a>
</p>

{/* AMERICAN HIGH SCHOOL DIPLOMA IMAGE */}
<img className="education-image" src={americanhighschoolImage} alt="American High School Diploma" />
</section>



{/* EMPLOYMENT EXPERIENCE */}
<section className="resume-section">
<h2>Experience</h2>

{/* ABSOLUTE CLEANING SOLUTIONS EMPLOYMENT */}
<div className="experience-item">
<h3>Web Receptionist - Absolute Cleaning Solutions</h3>
<p className="date">Feb 2019 - December 2022</p>
<p className="date">Alabaster, AL 35007</p>

{/* ABSOLUTE CLEANING SOLUTIONS EMPLOYMENT DESCRIPTION */}
<p><b>Online Inquiry Management:</b> Successfully managed online inquiries through website chat, email, and social media, consistently providing prompt and helpful responses.</p>
<p><b>Website Maintenance:</b> Maintained and updated the company website, ensuring accuracy, visual appeal, and a user-friendly experience.</p>
<p><b>Online Engagement:</b> Actively engaged with website visitors and social media followers, fostering a vibrant online community by responding to comments, reviews, and feedback, thereby enhancing the user experience.</p>
<p><b>Data Entry and Documentation:</b> Recorded and maintained visitor logs, appointment schedules, and contact lists with meticulous attention to detail. Generated comprehensive reports on website traffic and user engagement.</p>
<p><b>Technical Support:</b> Provided effective technical support to website users, guiding them through navigation and efficiently troubleshooting common issues. Collaborated with the IT department to address complex technical problems.</p>
<p><b>Communication Skills:</b> Demonstrated excellent written and verbal communication, fostering productive interactions with online users.</p>
<p><b>Web Management Proficiency:</b> Exhibited proficiency in utilizing content management systems (CMS) and showcased a solid understanding of HTML/CSS, enabling minor adjustments and formatting.</p>
<p><b>Digital Tools Familiarity:</b> Expertly navigated live chat software and email management tools, ensuring efficient handling of online inquiries and correspondence.</p>
<p><b>Organizational Skills:</b> Maintained exceptional organizational skills to uphold precise data entry and documentation standards, contributing to a streamlined workflow.</p>
<p><b>Customer Service Orientation:</b> Prioritized a customer-centric approach, consistently delivering a positive user experience.</p>
<p><b>Multi-Tasking Abilities:</b> Skillfully juggled multiple tasks and effectively prioritized them within a dynamic online environment.</p>
<p><b>Adaptability:</b> Demonstrated adaptability to evolving technologies and online platforms, staying responsive to ever-changing user needs.</p>
<p><b>Skills</b> | Data Entry | Online Community Engagement | Online Inquiry Management | Website Maintenance and Management</p>
</div>

{/* ABSOLUTE CLEANING SOLUTIONS PHONE NUMBER, EMAIL, AND WEBSITE */}
<p className="phone">
<a href="tel:(205) 612-6199">(205) 612-6199</a>
<a href="https://www.acsbirmingham.com/" target="_blank" rel="noopener noreferrer">Absolute Cleaning Solutions Website</a>
<a href="mailto:Joshtatum@acsbirmingham.com">Joshtatum@acsbirmingham.com</a>
</p>
<br></br>

<div className="experience-item">
<h3>Sales/Independent Contractor - eBay Sellers</h3>
<p className="date">Aug 2016 - Dec 2018</p>
<p><b>Inventory Management:</b> Created and managed inventory of items to be sold online, ensuring proper updates and organization.</p>
<p><b>Customer Engagement:</b> Determined customers' requirements online and provided them with suggestions, showcasing strong customer engagement skills.</p>
<p><b>Inventory Monitoring:</b> Regularly reviewed the inventory to determine if customers' required items were available.</p>
<p><b>Order Fulfillment:</b> Picked, packed, and dispatched items, ensuring they were properly labeled and addressed, demonstrating effective order fulfillment abilities.</p>
<p><b>SEO and Marketing:</b> Handled search engine optimization (SEO) work to prioritize product marketing to customers.</p>
<p><b>Customer Support:</b> Resolved customers' complaints and issues using established company procedures, providing top-notch customer support.</p>
<p><b>Communication:</b> Responded to customer queries over email and through the website's chat support, highlighting strong communication skills.</p>
<p><b>Skills</b> | Inventory Management Skills | Inventory Monitoring | Customer Support | Sales | Customer Engagement | E-Commerce Platform Proficiency | Communication </p>
</div>
<br></br>

{/* THE REDMONT HOTEL EMPLOYMENT */}
<div className="experience-item">
<h3>Cafe Supervisor - The Redmont Hotel/Cafe 2101</h3>
<p className="date">Sept 2015 - Aug 2016</p>
<p className="date">2101 5th Ave N, Birmingham, AL 35203</p>

 {/* CAFE 2101 EMPLOYMENT DUTIES */} 
<p><b>Inventory Management:</b> Maintained weekly inventory reports and placed orders when necessary, demonstrating strong organizational and supply management skills.</p>
<p><b>Training and Supervision:</b> Trained new staff in cooking and cleaning procedures, and scheduled Barista training with an affiliated local coffee company, Revelator.</p>
<p><b>Dependability:</b> Demonstrated reliability by always being available in Cafe 2101 and Harvest restaurant when needed.</p>
<p><b>Customer Flow Management:</b> Maintained the flow of customers and service throughout the day, ensuring a positive customer experience.</p>
<p><b>Coffee Expertise:</b> Handled all coffee orders for the restaurant and cafe, showcasing proficiency in coffee preparation and service.</p>
<p><b>Safety and Cleanliness:</b> Maintained a clean and safe working environment and motivated the team to do the same, emphasizing the importance of hygiene and safety protocols.</p>
<p><b>Skills</b> | Customer Flow Management | Coffee Expertise | Inventory Management | Dependability | Problem-solving | Adaptability </p>
</div>

{/* THE REDMONT HOTEL/CAFE 2101 PHONE NUMBER, WEBSITE, AND EMAIL */}
<p className="phone">
<a href="tel:(205) 957-6828">(205) 957-6828</a>
<a href="https://www.hilton.com/en/hotels/bhmcuqq-redmont-hotel-birmingham/?SEO_id=GMB-AMER-QQ-BHMCUQQ&y_source=1_Mjg1Njc0OC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" target="_blank" rel="noopener noreferrer">The Redmont Hotel/Cafe 2101 Website</a>
<a href="mailto:nkirk@theredmont.com">nkirk@theredmont.com</a>
</p>
<br></br>

{/*PARTYOLOGY EVENT PLANNING EMPLOYMENT */}
<div className="experience-item">
<h3>Creative Director Assistant - Partyology Event Planning</h3>
<p className="date">Sept 2014 - Nov 2015</p>
<p className="date">5305 1st Ave N, Birmingham, AL 35212</p>

{/*PARTYOLOGY EVENT PLANNING EMPLOYMENT DESCRIPTIONS*/}
<p><b>Customer Satisfaction:</b> Managed office operations, including answering phone calls, addressing customer inquiries, and ensuring a high level of customer satisfaction throughout the event planning process.</p>
<p><b>Event Management:</b> Executed event logistics by booking and coordinating various events, demonstrating meticulous attention to detail to guarantee successful outcomes.</p>
<p><b>Event Design:</b> Played a pivotal role in event setup and breakdown, ensuring a seamless and visually appealing environment for clients and attendees.</p>
<p><b>Social Media Marketing:</b> Led social media marketing efforts to enhance brand visibility and engagement, utilizing platforms such as Facebook, Instagram, and Twitter to promote upcoming events and attract a wider audience.</p>
<p><b>Team Leadership:</b> Conducted interviews and provided training for new staff, contributing to the development of a skilled and cohesive team.</p>
<p><b>Skills</b> | Social Media Marketing | Event Design | Event Management | Customer Satisfaction </p>
</div>

{/*PARTYOLOGY EVENT PLANNING PHONE NUMBER AND EMAIL AND WEBSITE */}
<p className="phone">
<a href="tel:(205)386-5676">(205) 386-5676</a>
<a href="https://www.partyologyevents.com/" target="_blank" rel="noopener noreferrer"> Partyology Event Planning Website</a>
<a href="mailto:bookthefun@partyology.net">bookthefun@partyology.net</a>
</p>
<br></br>

{/* UNITED TAX PROFESSIONALS EMPLOYMENT */}
<div className="experience-item">
<h3>Customer Service Representative - United Tax Professionals</h3>
<p className="date">Jan 2015 - May 2015</p>
<p className="date">Birmingham, AL</p>
<p><b>Exceptional Customer Service:</b> Provided exceptional customer service by promptly and professionally answering phone calls, addressing inquiries, and ensuring a positive experience for clients.</p>
<p><b>Office Management:</b> Managed office tasks such as copying and printing documents, contributing to efficient document organization and retrieval processes.</p>
<p><b>Administrative Efficiency:</b> Executed various office duties, including running errands and delivering checks to other locations, showcasing reliability and dedication to meeting organizational needs.</p>
<p><b>Time Management:</b> Performed driving responsibilities covering extensive miles, demonstrating strong time management and organizational skills while ensuring the timely delivery of documents and materials.</p>
<p><b>Customer Engagement:</b> Welcomed and assisted customers upon entering the building, fostering a friendly and welcoming atmosphere.</p>
<p><b>Skills</b> | Office Management Competencies | Time Management and Organization | Customer Engagement and Interpersonal Abilities | Attention to Detail</p>
</div>
<br></br>

{/*DAIRY QUEEN EMPLOYMENT */}
<div className="experience-item">
<h3>Head Cashier - Dairy Queen</h3>
<p className="date">Oct 2013 - Jan 2015</p>
<p className="date">1349 Hueytown Rd, Hueytown, AL 35023</p>

{/*DAIRY QUEEN EMPLOYMENT DUTIES */}
<p><b>Cash Management:</b> Effectively managed and supervised cashiers, ensuring smooth and accurate transaction processes.</p>
<p><b>Financial Oversight:</b> Oversaw daily cash handling activities, reconciled registers, and promptly addressed customer inquiries.</p>
<p><b>Efficiency Improvement:</b> Implemented efficient cash management procedures, resulting in a reduction in discrepancies.</p>
<p><b>Training Leadership:</b> Played a key role in training new staff on cash handling protocols and customer service standards, contributing to a skilled and cohesive team.</p>
<p><b>Accuracy:</b> Maintained a high level of accuracy in financial transactions during the tenure from October 2013 to January 2015.</p>
<p><b>Skills</b> | Cash Management | Customer Service | Team Collaboration | Communication</p>
</div>   
    
{/*DAIRY QUEEN PHONE NUMBER */}
<p className="phone">
<a href="tel:(205) 491-2798">(205) 491-2798</a>
<a href="https://www.dairyqueen.com/en-us/locations/al/hueytown/1349-hueytown-rd/11176/" target="_blank" rel="noopener noreferrer"> Dairy Queen - Hueytown Location </a>
<a href="mailto:dqrthomas@gmail.com">dqrthomas@gmail.com</a>
</p>
</section>




{/* SKILLS SECTION - DONT TOUCH */}
<section className="resume-section">
<h2>Skills</h2>
<div className="skills-section">

<div class="badgeresume"> 
<h3>Languages</h3>
{/* GRAPHQL BADGE*/}
<img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL Badge" /> 
{/* HTML5 BADGE */}
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
{/* JAVASCRIPT BADGE */}
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript Badge" />
{/* MARKDOWN BADGE */}
<img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown Badge" />
{/* POWERSHELL BADGE */}
<img src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell Badge" />
{/* WINDOWS BADGE*/}  
<img src="https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white" alt="windows terminal" />
{/* SHELL SCRIPT BADGE */}
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script Badge" />
</div>

<div class="badgeresume">
<h3>Frameworks, Platforms and Libraries</h3>
{/* REACT BADGE */}
<img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React Badge" />
{/* NODE BADGE*/}
<img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js Badge" />
{/* NODEMON BADGE*/}
<img src="https://img.shields.io/badge/Nodemon-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="Nodemon Badge" />
{/* NPM BADGE*/}
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM Badge" />
{/* VITE BADGE*/}
<img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" />
{/* WEBPACK BADGE*/} 
<img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack Badge" />
{/* JQUERY BADGE*/} 
<img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery Badge" />
{/* EXPRESS BADGE*/}
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js Badge" />

{/* BOOTSTRAP BADGE*/}
<img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Badge" />

{/* APOLLO GRAPHQL BADGE*/}
<img src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql" alt="Apollo GraphQL Badge" />

<img src="https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=for-the-badge" alt="env badge" />

<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT Badge" />

{/* INSOMNIA BADGE*/}
<img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" alt="insomnia" />

{/* Handlebars BADGE*/}
<img src="https://img.shields.io/badge/Handlebars-orange" alt="Handlebars Badge" width="210" height="20"></img>

{/* TAILWIND BADGE*/}
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
</div>

  
<div class="badgeresume">
{/* HOSTING SECTION*/}
<h3>Hosting</h3>

{/* AWS BADGE*/} 
<img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />

{/* GITHUB PAGES BADGE*/}  
<img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" alt="Github Pages" />

{/* HEROKU BADGE*/}  
<img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />

{/* NETLIFY BADGE*/}  
<img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="Netlify" />
</div>

<div class="badgeresume">
<h3>Databases</h3>
{/* MongoDB Badge */}
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" />
{/* MySQL Badge */}
<img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" />
</div>

<div class="badgeresume">
<h3>ORM</h3>
{/* SEQUELIZE */}
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize Badge" />
</div>


<div class="badgeresume">
<h3>Version Control</h3>
{/* GITHUB */}
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
{/* GITLAB*/}
<img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab Badge" />
{/* GIT */}
<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</div>

<div class="badgeresume">
{/* OPERATING SYSTEM */}
<h3>Operating System</h3>
{/* WINDOWS */}
<img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows Badge" />
</div>

<div class="badgeresume">
{/* TESTING SECTION */}
<h3>Testing</h3>
{/* JEST */}
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest Badge" />
</div>

<div class="badgeresume">
{/* DESIGN SECTION */}
<h3>Design</h3>
{/* Canva Badge */}
<img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva Badge" />
{/* INKSCAPE BADGE*/}  
<img src="https://img.shields.io/badge/Inkscape-e0e0e0?style=for-the-badge&logo=inkscape&logoColor=080A13" alt="Inkscape badge" />

</div>

<div class="badgeresume">
<h3>Editor</h3>
{/* VS CODE */}
<img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="Visual Studio Badge" />
</div>
</div>
</section>

    </div>
  );
}

export default Resume;
