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
    name: 'Bookmarks App',
    description: 'Organize your bookmarks with this bookmarks app. This app grew out of a desire to organize my bookmarks in a visual layout.',
    url: 'https://www.google.com',
    github: '',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js'],
    skills: ['ux', 'development'],
  },
  {
    name: 'Linescape',
    description: 'The Kayak of sailing shipping schedules. View schedules, vessel and port information, or use the API and data feeds for your own application.',
    url: 'https://www.linescape.com/',
    github: '',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['angular', 'asp.net'],
    skills: ['ux', 'development'],
  },
  {
    name: 'Blue Cross Blue Shield BlueResource',
    description: 'A health and wellness platform that allows HR employees to browse, download, and distribute documents for the betterment of their company’s employees.',
    url: 'https://blueresourceil.com/',
    github: '',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js'],
    skills: ['ux', 'development'],
  },
  {
    name: 'Lincoln Hall + Schubas Tavern',
    description: 'The website for two popular music venues in Chicago: Schubas Tavern and Lincoln Hall.',
    url: 'http://www.lh-st.com/',
    github: '',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js'],
    skills: ['ux', 'development'],
  },
  {
    name: 'American Board of Preventive Medicine',
    description: 'The certifying medical board for three specialties and four subspecialties, including Public Health and General Preventive Medicine and Clinical Informatics. Physicians can apply for certification or view their certification status.',
    url: 'https://www.theabpm.org/',
    github: '',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js'],
    skills: ['ux', 'development'],
  },
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
          <div>
            <button>Other</button>
            <button>School Projects</button>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this.animateWork();
  }
}
