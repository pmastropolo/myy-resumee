import React from 'react';
import './Home.css';

function Home() {
  const skills = [
    'HTML',
    'CSS',
    'Git',
    'JavaScript',
    'Bootstrap',
    'The DOM',
    'APIs',
    'jQuery',
    'JSON',
    'AJAX',
    'Team Collaboration',
    'Agile Development',
    'Project Demonstration & Storytelling',
    'Node.js',
    'ES6',
    'Object-oriented programming',
    'Express.js',
    'MySQL',
    'MVC Paradigm',
    'Sequelize',
    'Jest',
    'Insomnia',
    'Progressive Web Apps',
    'React',
    'NoSQL',
    'MERN Stack',
    'Computer Science Fundamentals',
    'GraphQL',
    'Apollo Server',
    'Apollo Client',
    'React Router',
    'React Hooks',
    'MongoDB',
    'SQL',
    'RESTful APIs',
    'Handlebars',
    'MVC Paradigm',
    'Inquirer 8.2.4',
    'Netlify',

  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Below, you'll find a collection of skills that represent my expertise and aspirations as a full-stack web developer.</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="keyboard-button skill" key={index}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
