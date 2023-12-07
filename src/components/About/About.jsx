import React, { useState } from 'react';
import './About.css';

function About() {
  const imageUrl = '/images/profilepicture.jpg';
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-container">
      <h2><b>About Section</b></h2>
      <p>
        I'm a 27-year-old female born and raised in Alabama with a passion for both traveling and coding. My journey into the world of web development began with HTML, CSS, and JavaScript, and it quickly evolved as I delved into modern web technologies. I've had the opportunity to explore and work with various technologies, including React for building dynamic user interfaces, Node.js for server-side development, and databases like MongoDB and MySQL for managing data.
      </p>
      {showMore && (
        <p>
          I'm well-versed in the MERN (MongoDB, Express.js, React, Node.js) stack, and I have a solid foundation in computer science fundamentals. My GitHub profile showcases my dedication to open-source contributions and collaborative coding projects.
        </p>
      )}
      {showMore && (
        <p>
          With experience in ES6, object-oriented programming, and familiarity with technologies like Express, Sequelize, and Agile development methodologies, I've honed my skills in creating efficient and scalable web applications. I'm also proficient in front-end technologies such as HTML, CSS, Bootstrap, and understanding the Document Object Model (DOM).
        </p>
      )}
      {showMore && (
        <p>
          My knowledge extends to working with APIs, utilizing libraries like jQuery, and handling data formats like JSON and AJAX. I'm passionate about learning and growing in the field of web development, and I'm excited to contribute to innovative projects that make a positive impact.
        </p>
      )}
      <button className="read-more-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Read Less' : 'Read More'}
      </button>
      <img src={imageUrl} alt="Profile" className="profile-image" />


      {/* BADGES AND ICONS */}
      <div className="badge-container">
        <div class="badge-section">
          <h3>Languages</h3>
          {/* GRAPHQL BADGE */}
          <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL Badge" />
          {/* HTML5 BADGE */}
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
          {/* JAVASCRIPT BADGE */}
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript Badge" />
          {/* MARKDOWN BADGE */}
          <img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown Badge" />
          {/* POWERSHELL BADGE */}
          <img src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell Badge" />
          <img src="https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white" alt="windows terminal" />
          {/* SHELL SCRIPT BADGE */}
          <img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script Badge" />
        </div>

<div class="badge-section">
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
{/* JWT BADGE*/}
<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT Badge" />
{/* INSOMNIA BADGE*/}
<img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" alt="insomnia" />
{/* TAILWIND BADGE*/}
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
</div>

<div class="badge-section">
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

<div class="badge-section">
<h3>Databases</h3>
{/* MongoDB Badge */}
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" />
{/* MySQL Badge */}
<img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" />
</div>

<div class="badge-section">
<h3>ORM</h3>
{/* SEQUELIZE */}
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize Badge" />
</div>


<div class="badge-section">
<h3>Version Control</h3>
{/* GITHUB */}
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
{/* GITLAB*/}
<img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab Badge" />
{/* GIT */}
<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</div>

<div class="badge-section">
{/* OPERATING SYSTEM */}
<h3>Operating System</h3>
{/* WINDOWS */}
<img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows Badge" />
</div>

<div class="badge-section">
{/* TESTING SECTION */}
<h3>Testing</h3>
{/* JEST */}
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest Badge" />
</div>

<div class="badge-section">
{/* DESIGN SECTION */}
<h3>Design</h3>
{/* Canva Badge */}
<img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva Badge" />
{/* INKSCAPE BADGE*/}
<img src="https://img.shields.io/badge/Inkscape-e0e0e0?style=for-the-badge&logo=inkscape&logoColor=080A13" alt="Inkscape badge" />
</div>

<div class="badge-section">
<h3>Editor</h3>
{/* VS CODE */}
<img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="Visual Studio Badge" />
</div>
</div>
        {/* Interests and Hobbies Section */}
        <div className="interests-hobbies">
          <h2><b>Interests and Hobbies:</b></h2>
          {/* Fav TV Shows */}
          <h3>Favorite TV Shows</h3>
          <p>The office | Stranger Things | Black Mirror | Breaking Bad | The Big Bang Theory | Fixer Upper | Sons of Anarchy</p>
          <h3>Favorite Foods</h3>
          <p> Biscuits and Gravy | Sweet Tea | Chater | Chili </p>
          <h3>Personality Type</h3>
          <p><b>ENFJ</b><br></br> "The Teacher" - Natural leaders with excellent communication and interpersonal skills, excelling in mentoring, coaching, and fostering collaboration. Valuable assets in various professional settings.</p>
        </div>
      </div>

  );
}

export default About;
