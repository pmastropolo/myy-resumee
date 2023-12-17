import React from 'react';
import './Portfolio.css'; 

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Work Day Planner',
      description: 'A scheduler with color-coded time blocks. Saves events in local storage.',
      imageUrl: '/images/workdaysched.jpg',
      deployed: 'https://pmastropolo.github.io/module-five-challenge-api-day-schedule/',
      githubLink: 'https://github.com/pmastropolo/module-five-challenge-api-day-schedule/tree/main',
    },
    {
      id: 2,
      title: 'Coding Quiz',
      description: 'A timed JavaScript quiz. Tracks user scores and offers saving initials and scores.',
      imageUrl: '/images/popquizjavascript.jpg',
      deployed: 'https://pmastropolo.github.io/chall-four-project-web-apis-coding-quiz-module/',
      githubLink: 'https://github.com/pmastropolo/chall-four-project-web-apis-coding-quiz-module',
    },
    {
      id: 3,
      title: 'Hoarders Corner',
      description: 'Hoarders Corner is an innovative platform designed to cater to the diverse interests of collectors.',
      imageUrl: '/images/hoarderscorner.jpg',
      deployed: 'https://www.youtube.com/watch?v=jDqNtpYQiP0',
      githubLink: 'https://github.com/pmastropolo/hoarders-corner/tree/peeeytyttoonn',
    },

    {
      id: 4,
      title: 'Password Generator',
      description: 'Generates random passwords based on user choices.',
      imageUrl: '/images/javascriptpassword.jpg',
      deployed: 'https://pmastropolo.github.io/module-three-javascript-password-generator-project/',
      githubLink: 'https://github.com/pmastropolo/module-three-javascript-password-generator-project',
    },
    {
      id: 5,
      title: 'SVG Logo Maker',
      description: 'Command-line logo generator with user-defined text and shape.',
      imageUrl: '/images/logomakersvg.jpg',
      deployed: 'https://www.youtube.com/watch?v=d6Dw98sY9rA',
      githubLink: ' https://github.com/pmastropolo/project-ten-svg-simple-logo-maker-challenge',
    },
    {
      id: 6,
      title: 'Movie Recommender',
      description: 'Helps users pick a movie based on genre or title.',
      imageUrl: '/images/movierecom.jpg',
      deployed: 'https://gabriel-v75169.github.io/Movie-Recommendation/',
      githubLink: 'https://github.com/Gabriel-V75169/Movie-Recommendation/tree/main',
    },

    {
      id: 7,
      title: 'CodeMantic Dating Web Application',
      description: 'A unique dating application written by developers for developers.',
      imageUrl: '/images/codemantic.jpg',
      deployed: 'https://codemantic-e7e316dea174.herokuapp.com/',
      githubLink: 'https://github.com/Luis00809/codeMantic',
    },

    {
      id: 8,
      title: 'Back End E Commerce Module',
      description: 'A back-end for an e-commerce platform using Express.js API, Sequelize, and MySQL.',
      imageUrl: '/images/ormprojectttt.jpg',
      deployed: 'https://www.youtube.com/watch?v=hVpLeKTFeS4',
      githubLink: 'https://github.com/pmastropolo/project-object-relational-mapping-challenge-back-end-e-commerce-module-orm/tree/main',
    },


    {
      id: 9,
      title: 'Employee Tracker',
      description: 'A command line application to manage a companys employee database, featuring Node.js, Inquirer 8.2.4, and MySQL.',
      imageUrl: '/images/employee.jpg',
      deployed: 'https://www.youtube.com/watch?v=Lo4xbWoiPC0',
      githubLink: 'https://github.com/pmastropolo/challenge-twelve-employee-db-database-mysql-project/tree/main',
    },


    {
      id: 10,
      title: 'README Generator',
      description: 'A Readme Generator featuring node and inquirer 8.2.4 command line application',
      imageUrl: '/images/readmegenerator.jpg',
      deployed: 'https://www.youtube.com/watch?v=mNXCE8VZcrw',
      githubLink: 'https://github.com/pmastropolo/project-nine-node-readme-generator-challenge',
    },

    {
      id: 11,
      title: 'Horiseon',
      description: 'Refactored Existing Code using HTML & CSS',
      imageUrl: '/images/horiseon.jpg',
      deployed: 'https://pmastropolo.github.io/module-one-horiseon-coding-project/#search-engine-optimization',
      githubLink: 'https://github.com/pmastropolo/module-one-horiseon-coding-project',
    },

    {
      id: 12,
      title: 'Advanced CSS Resume',
      description: 'A portfolio that displays projects I have worked on.',
      imageUrl: '/images/advanceddcss.jpg',
      deployed: 'https://pmastropolo.github.io/module-two-challenge-advanced-css/',
      githubLink: 'https://github.com/pmastropolo/module-two-challenge-advanced-css',
    },

    {
      id: 13,
      title: 'Regex Tutorial',
      description: 'A regex, or regular expression, tutorial for email validation',
      imageUrl: '/images/tutututut.jpg',
      deployed: 'https://gist.github.com/pmastropolo/05d14438253794a5db84dd96d63c92a8',
      githubLink: 'https://github.com/pmastropolo/seventeen-chall-module-regex-tutorial',
    },

    {
      id: 14,
      title: 'Study Guide - The Basics of Coding',
      description: 'Study Guide built using HTML, CSS, & JavaScript',
      imageUrl: '/images/studyguidebasics.jpg',
      deployed: 'https://pmastropolo.github.io/prework-study-guide/',
      githubLink: 'https://github.com/pmastropolo/prework-study-guide/tree/main/assets',
    },

    {
      id: 15,
      title: 'Social App',
      description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
      imageUrl: '/images/social.jpg',
      deployed: 'https://www.youtube.com/watch?v=UYZClo228xo',
      githubLink: 'https://github.com/pmastropolo/proj-eight-teen-chall-nosql-social-network-api',
    },

    {
      id: 16,
      title: 'My Resume - React',
      description: 'React application designed to showcase my professional skills and experiences.',
      imageUrl: '/images/resumereactt.jpg',
      deployed: 'https://sparkling-frangollo-20e7ef.netlify.app',
      githubLink: 'https://github.com/pmastropolo/myy-resumee/tree/main',
    },

    {
      id: 17,
      title: 'The Blog Website',
      description: 'An example blog website built with HTML and CSS.',
      imageUrl: '/images/blogggywebsiteexample.jpg',
      deployed: 'https://pmastropolo.github.io/bloggyforwebsiteexample/',
      githubLink: 'https://github.com/pmastropolo/bloggyforwebsiteexample',
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
