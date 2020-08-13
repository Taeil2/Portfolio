import React from 'react';

export default class Category extends React.Component {
  render() {
    let skills = [];

    this.props.skill.forEach((skill, i) => {
      skills.push(
        <li className="skill hidden" key={i}>
          <div className={"image-container " + skill[2]}>
            <img src={skill[1]} alt={skill[0] + " Logo"} />
          </div>
          <div className="title">{skill[0]}</div>
        </li>
      );
    });

    skills.push(
      <>
        <li className="skill" key="empty-1"></li>
        <li className="skill" key="empty-2"></li>
        <li className="skill" key="empty-3"></li>
      </>
    );

    return (
      <section>
        <h2 className="hidden">{this.props.name}</h2>
        <ul className="skills-container">{skills}</ul>
      </section>
    );
  }

}
