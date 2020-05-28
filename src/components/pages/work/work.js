import React from 'react';
import './work.scss';
import Project from './project/project';

// import quizAppImage from './../../../images/projects/thinkful-quiz-app.png';
// import bookmarksAppImage from '';
import linescapeImage from './../../../images/projects/linescape.png';
import bcbsImage from './../../../images/projects/blueresource.png';
import lhstImage from './../../../images/projects/lh-st.png';
import abpmImage from './../../../images/projects/abpm.png';

export default class Work extends React.Component {
  // Description: What does the app do? Who is it for? Why did you build it?
  projectsData = [
  /*{
    name: 'Quiz App',
    description: 'Test your video game history knowledge with this video game history quiz. This was a quick multiple choice quiz app written for my Thinkful course to demonstrate practice of semantic HTML, CSS, JavaScript, and jQuery.',
    url: 'https://thinkful-ei-orka.github.io/Quiz-App_Taeil-Yousef/',
    github: 'https://github.com/thinkful-ei-orka/Quiz-App_Taeil-Yousef',
    image: quizAppImage,
    technologies: ['html', 'css', 'jquery'],
    design: [''],
  },
  */
  {
    name: 'Bookmarks App',
    description: "This project was born out of a desire to organize my bookmarks in a visual layout and is my Thinkful Bootcamp final project. It draws inspiration from Google Chrome's new tab screen as well as the iOS home screen. I currently only have a demo for public use, but might release it online or on the Chrome store.",
    url: 'https://www.google.com',
    github: '',
    image: 'https://via.placeholder.com/500x300',
    technologies: ['html', 'css', 'js', 'react'],
    design: ['wireframes'],
  },
  {
    name: 'Linescape',
    description: "Linescape helps you find ocean sailing schedules to ship goods overseas. It's like a flight search engine, but for container shipping vessels. View sailing schedules, vessel data, or port information, or use the API and data feeds for your own application.",
    url: 'https://www.linescape.com/',
    github: '',
    image: linescapeImage,
    technologies: ['html', 'css', 'js', 'angular', 'asp.net'],
    design: ['competitive-analysis', 'wireframes'],
  },
  {
    name: 'Blue Cross Blue Shield BlueResource',
    description: 'BlueResource is a BCBS product designed for companies to navigate and distribute health and wellness documents. Documents are sorted by category and purpose, such as stress management and heart health. The site also includes health campaigns and special documents such as a yearly calendar.',
    url: 'https://blueresourceil.com/',
    github: '',
    image: bcbsImage,
    technologies: ['html', 'css', 'js', 'asp.net'],
    design: ['user-research', 'user-interviews', 'surveys', 'information-architecture', 'wireframes', 'prototypes'],
  },
  {
    name: 'Lincoln Hall + Schubas Tavern',
    description: 'Lincoln Hall and Schubas Tavern are two quality music venues in Chicago. This site combines the events from the two venues into a single list. It was designed for the best fan experience and simple owner management.',
    url: 'http://www.lh-st.com/',
    github: '',
    image: lhstImage,
    technologies: ['html', 'css', 'js', 'jquery', 'wordpress', 'asp.net'],
    design: ['wireframes'],
  },
  {
    name: 'American Board of Preventive Medicine',
    description: 'The American Board of Preventive Medicine is the certifying medical board for three specialities and four subspecialties. The website explains all there is to know about the Board and provides an online application to get board certified. The Board reviews, manages, and approves applications online.',
    url: 'https://www.theabpm.org/',
    github: '',
    image: abpmImage,
    technologies: ['html', 'css', 'js', 'wordpress', 'asp.net'],
    design: ['personas', 'user research', 'wireframes'],
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
