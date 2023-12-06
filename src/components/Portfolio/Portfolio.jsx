import React from 'react';
import './Portfolio.css'; 

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Work Day Planner',
      description: 'A scheduler with color-coded time blocks. Saves events in local storage.',
      imageUrl: 'src/assets/public/images/workdaysched.jpg',
      deployed: 'https://pmastropolo.github.io/module-five-challenge-api-day-schedule/',
      githubLink: 'https://github.com/pmastropolo/module-five-challenge-api-day-schedule/tree/main',
    },
    {
      id: 2,
      title: 'Coding Quiz',
      description: 'A timed JavaScript quiz. Tracks user scores and offers saving initials and scores.',
      imageUrl: 'src/assets/public/images/PROJECT 4 POP QUIZ.jpg',
      deployed: 'https://pmastropolo.github.io/chall-four-project-web-apis-coding-quiz-module/',
      githubLink: 'https://github.com/pmastropolo/chall-four-project-web-apis-coding-quiz-module',
    },
    {
      id: 3,
      title: 'Password Generator',
      description: 'Generates random passwords based on user choices.',
      imageUrl: 'src/assets/public/images/javascriptpassword.jpg',
      deployed: 'https://pmastropolo.github.io/module-three-javascript-password-generator-project/',
      githubLink: 'https://github.com/pmastropolo/module-three-javascript-password-generator-project',
    },
    {
      id: 4,
      title: 'SVG Logo Maker',
      description: 'Command-line logo generator with user-defined text and shape.',
      imageUrl: 'src/assets/public/images/svglogo.jpeg',
      deployed: 'https://www.youtube.com/watch?v=d6Dw98sY9rA',
      githubLink: ' https://github.com/pmastropolo/project-ten-svg-simple-logo-maker-challenge',
    },
    {
      id: 5,
      title: 'Movie Recommender',
      description: 'Helps users pick a movie based on genre or title.',
      imageUrl: 'src/assets/public/images/movierecom.jpg',
      deployed: 'https://gabriel-v75169.github.io/Movie-Recommendation/',
      githubLink: 'https://github.com/Gabriel-V75169/Movie-Recommendation/tree/main',
    },

    {
      id: 6,
      title: 'CodeMantic Dating Web Application',
      description: 'A unique dating application written by developers for developers.',
      imageUrl: 'src/assets/public/images/codemantic.jpg',
      deployed: 'https://codemantic-e7e316dea174.herokuapp.com/',
      githubLink: 'https://github.com/Luis00809/codeMantic',
    },

    {
      id: 7,
      title: 'Back End E Commerce Module',
      description: 'A back-end for an e-commerce platform using Express.js API, Sequelize, and MySQL.',
      imageUrl: 'src/assets/public/images/ORMPROJ.jpg',
      deployed: 'https://www.youtube.com/watch?v=hVpLeKTFeS4',
      githubLink: 'https://github.com/pmastropolo/project-object-relational-mapping-challenge-back-end-e-commerce-module-orm/tree/main',
    },


    {
      id: 8,
      title: 'Employee Tracker',
      description: 'A command line application to manage a companys employee database, featuring Node.js, Inquirer 8.2.4, and MySQL.',
      imageUrl: 'src/assets/public/images/employee.jpg',
      deployed: 'https://www.youtube.com/watch?v=Lo4xbWoiPC0',
      githubLink: 'https://github.com/pmastropolo/challenge-twelve-employee-db-database-mysql-project/tree/main',
    },


    {
      id: 9,
      title: 'README Generator',
      description: 'A Readme Generator featuring node and inquirer 8.2.4 command line application',
      imageUrl: 'src/assets/public/images/readmegenerator.jpg',
      deployed: 'https://www.youtube.com/watch?v=mNXCE8VZcrw',
      githubLink: 'https://github.com/pmastropolo/project-nine-node-readme-generator-challenge',
    },

    {
      id: 10,
      title: 'Horiseon',
      description: 'Refactored Existing Code using HTML & CSS',
      imageUrl: 'src/assets/public/images/horiseon.jpg',
      deployed: 'https://pmastropolo.github.io/module-one-horiseon-coding-project/#search-engine-optimization',
      githubLink: 'https://github.com/pmastropolo/module-one-horiseon-coding-project',
    },

    {
      id: 11,
      title: 'Advanced CSS Resume',
      description: 'A portfolio that displays projects I have worked on.',
      imageUrl: 'src/assets/public/images/advanceddcss.jpg',
      deployed: 'https://pmastropolo.github.io/module-two-challenge-advanced-css/',
      githubLink: 'https://github.com/pmastropolo/module-two-challenge-advanced-css',
    },

    {
      id: 12,
      title: 'Regex Tutorial',
      description: 'A regex, or regular expression, tutorial for email validation',
      imageUrl: 'src/assets/public/images/TUT.jpg',
      deployed: 'https://gist.github.com/pmastropolo/05d14438253794a5db84dd96d63c92a8',
      githubLink: 'https://github.com/pmastropolo/seventeen-chall-module-regex-tutorial',
    },

    {
      id: 13,
      title: 'Study Guide - The Basics of Coding',
      description: 'Study Guide built using HTML, CSS, & JavaScript',
      imageUrl: 'src/assets/public/images/studyguidebasics.jpg',
      deployed: 'https://pmastropolo.github.io/prework-study-guide/',
      githubLink: 'https://github.com/pmastropolo/prework-study-guide/tree/main/assets',
    },
{
      id: 14,
      title: 'My Resume - React',
      description: 'React application designed to showcase my professional skills and experiences.',
      imageUrl: 'src/assets/public/images/IMG_4570.png',
      deployed: 'https://sparkling-frangollo-20e7ef.netlify.app',
      githubLink: 'https://github.com/pmastropolo/myy-resumee/tree/main',
    },
    {
      id: 15,
      title: 'Social App',
      description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
      imageUrl: 'src/assets/public/images/IMG_4569.png',
      deployed: 'https://www.youtube.com/watch?v=UYZClo228xo',
      githubLink: 'https://github.com/pmastropolo/proj-eight-teen-chall-nosql-social-network-api',
    },

  ];

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-items">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <h2>{item.title}</h2>
            <img src={item.imageUrl} alt={item.title} />
            <p className="description-hidden">{item.description}</p>
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
            <br />  
            <a href={item.deployed} target="_blank" rel="noopener noreferrer">View Finished Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
