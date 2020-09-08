import React from 'react';
import './work.scss';
import Project from './project/project';

import bookmarksManagerImage from '../../../images/projects/bookmarks-manager.png';
import linescapeImage from './../../../images/projects/linescape.png';
import bcbsImage from './../../../images/projects/blueresource.png';
import lhstImage from './../../../images/projects/lh-st.png';
import abpmImage from './../../../images/projects/abpm.png';
// import _default from '@popperjs/core/lib/modifiers/popperOffsets';

export default class Work extends React.Component {
  state = {
    windowScroll: false,
    mainScroll: false,
  }

  // Description: What does the app do? Who is it for? Why did you build it?
  projectsData = [
    {
      name: 'Bookmarks Manager',
      description: "This is currently a work in progress for my Thinkful bootcamp final project born out of a desire to organize my bookmarks in a visual layout. It draws inspiration from Google Chrome's new tab screen as well as the iOS home screen.",
      // description: "This project was born out of a desire to organize my bookmarks in a visual layout and is my Thinkful bootcamp final project. It draws inspiration from Google Chrome's new tab screen as well as the iOS home screen. I currently only have a demo for public use, but might release it online or on the Chrome store.",
      url: 'https://bookmarks-manager-front.taeil2.vercel.app/',
      github: 'https://github.com/Taeil2?tab=repositories&q=bookmarks-manager',
      wireframes: 'https://whimsical.com/78YBt1V9TEz4hZYPFvZoB2',
      image: bookmarksManagerImage,
      technologies: ['html', 'css', 'javascript', 'react', 'nodejs', 'postgresql'],
      design: ['wireframes'],
    },
    // {
    //   name: 'Spaced Repetition',
    //   description: 'This is a Thinkful project built with two partners, Orkun and Magdalena. It is a demo app for learning French using <a href="https://en.wikipedia.org/wiki/Spaced_repetition" target="_blank">spaced repetition</a> as a learning mechanism.',
    //   url: '',
    //   github: 'https://github.com/thinkful-ei-orka?q=spaced-repetition-otm',
    //   wireframes: 'https://whimsical.com/6k5CzJDoR5q8GZaJVM9z7d@2Ux7TurymN2CJKrnkw3n',
    //   image: spacedRepetitionImage,
    //   technologies: ['html', 'css', 'javascript', 'react', 'nodejs', 'postgresql'],
    //   design: ['wireframes'],
    // },
    {
      name: 'Linescape',
      description: "Linescape helps you find ocean sailing schedules to ship goods overseas. It's like a flight search engine, but for container shipping vessels. View sailing schedules, vessel data, or port information, or use the API and data feeds for your own application.",
      url: 'https://www.linescape.com/',
      github: '',
      wireframes: '',
      image: linescapeImage,
      technologies: ['html', 'css', 'javascript', 'angular', 'aspnet'],
      design: ['competitiveAnalysis', 'wireframes'],
    },
    {
      name: 'Blue Cross Blue Shield BlueResource',
      description: 'BlueResource is a BCBS product designed for companies to navigate and distribute health and wellness documents. Documents are sorted by category and purpose, such as stress management and heart health. The site also includes health campaigns and special documents such as a yearly calendar.',
      url: 'https://blueresourceil.com/',
      github: '',
      wireframes: '',
      image: bcbsImage,
      technologies: ['html', 'css', 'javascript', 'aspnet'],
      design: ['userResearch', 'userInterviews', 'surveys', 'informationArchitecture', 'wireframes', 'prototypes'],
    },
    {
      name: 'Lincoln Hall + Schubas Tavern',
      description: 'Lincoln Hall and Schubas Tavern are two quality music venues in Chicago. This site combines the events from the two venues into a single list. It was designed for the best fan experience and simple owner management.',
      url: 'http://www.lh-st.com/',
      github: '',
      wireframes: '',
      image: lhstImage,
      technologies: ['html', 'css', 'javascript', 'jquery', 'wordpress', 'aspnet'],
      design: ['wireframes'],
    },
    {
      name: 'American Board of Preventive Medicine',
      description: 'The American Board of Preventive Medicine is the certifying medical board for three specialities and four subspecialties. The website explains all there is to know about the Board and provides an online application to get board certified. The Board reviews, manages, and approves applications online.',
      url: 'https://www.theabpm.org/',
      github: '',
      wireframes: '',
      image: abpmImage,
      technologies: ['html', 'css', 'javascript', 'wordpress', 'aspnet'],
      design: ['personas', 'userResearch', 'wireframes'],
    },
  ];

  animateWork() {
    let projects = Array.from(document.querySelectorAll('.project'));
    let offset = 150;

    // fade in projects that are on screen
    let main = document.getElementsByTagName('main')[0];
    // let bottomPos = main.scrollTop + window.innerHeight;
    let bottomPos = main.scrollTop + window.innerHeight;
    projects.forEach((project) => {
      if (project.offsetTop < bottomPos) {
        setTimeout(function() {
          project.classList.remove('hidden');
        }, 250);
      }
    });

    // The page listens to window scroll if mobile, main scroll is desktop
    let nav = document.getElementsByTagName('nav');

    if (nav[0].offsetWidth < 200) {
      main.addEventListener('scroll', function() {
        // console.log('main scrolling');
        showProjects(main.scrollTop);
      });
    } else {
      window.addEventListener('scroll', function() {
        // console.log('window scrolling');
        showProjects(window.scrollY);
      });
    }

    // show projects when scrolling
    const showProjects = (scrollAttribute) => {
      // bottomPos = window.scrollY + window.innerHeight;
      // bottomPos = main.scrollTop + window.innerHeight;
      bottomPos = scrollAttribute + window.innerHeight;

      projects.forEach((project) => {
        if (project.offsetTop < bottomPos - offset) {
          project.classList.remove('hidden');
        }
      });
    }
  }

  componentDidMount() {
    // window.scrollBy(0,1);
    this.animateWork();
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
          {/* <div>
            <button>Other</button>
            <button>School Projects</button>
          </div> */}
        </div>
      </div>
    );
  }

  // componentDidUpdate() {
  //   this.animateWork();
  // }
}
