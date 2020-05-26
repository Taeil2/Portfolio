import React from 'react';
import './work.scss';
import Project from './project/project';

import quizAppImage from './../../../images/projects/thinkful-quiz-app.png';

export default class Work extends React.Component {
  // Description: What does the app do? Who is it for? Why did you build it?
  projectsData = [{
    name: 'Quiz App',
    description: 'Test your video game history knowledge with this video game history quiz. This was a quick multiple choice quiz app written for my Thinkful course to demonstrate practice of semantic HTML, CSS, JavaScript, and jQuery.',
    url: 'https://thinkful-ei-orka.github.io/Quiz-App_Taeil-Yousef/',
    github: 'https://github.com/thinkful-ei-orka/Quiz-App_Taeil-Yousef',
    image: quizAppImage,
    technologies: ['html', 'css', 'jquery'],
    skills: ['development'],
  },
  {
    name: 'Placeholder Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://www.google.com',
    github: 'https://github.com/Taeil2/thinkful-portfolio',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js'],
    skills: ['ux', 'development'],
  },/*
  {
    name: 'Placeholder Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://www.google.com',
    github: 'https://github.com/Taeil2/thinkful-portfolio',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js'],
    skills: ['ux', 'development'],
  }*/
  ];

  animateWork() {
    let projects = Array.from(document.querySelectorAll('.project'));
    let offset = 400;

    // fade in first project
    setTimeout(function() {
      projects[0].classList.remove('hidden');
    }, 250);

    // fade in projects on scroll
    let main = document.getElementsByTagName('main')[0];
    main.addEventListener('scroll', function() {
      let bottomPos = main.scrollTop + window.innerHeight;

      projects.forEach((project) => {
        if (project.offsetTop < bottomPos - offset) {
          project.classList.remove('hidden');
        }
      });
    });
  }

  render() {
    let projects = [];
    this.projectsData.forEach((project, i) => {
      projects.push(<Project data={project} key={i} />);
    });

    return (
      <div className="work-page background">
        <div className="wrapper">
          {projects}
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this.animateWork();
  }
}
