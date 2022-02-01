import React from 'react';
import OtherSkillIcons from './OtherSkillIcons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBootstrap, 
  faCss3Alt, 
  faEmber,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faNpm,
  faReact,
  faSass,
  faYarn
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const skillsArray = [
    { icon: faHtml5, tooltip: "HTML5" },
    { icon: faCss3Alt, tooltip: "CSS3" },
    { icon: faJsSquare, tooltip: "JavaScript" },
    { icon: faBootstrap, tooltip: "Bootstrap" },
    { icon: faEmber, tooltip: "Ember.js" },
    { icon: faReact, tooltip: "React.js" },
    { icon: faNode, tooltip: "Node.js" },
    { icon: faNpm, tooltip: "NPM" },
    { icon: faSass, tooltip: "Sass" },
    { icon: faGitAlt, tooltip: "Git" },
    { icon: faYarn, tooltip: "Yarn" }
  ];

  return (
    <section className="d-flex flex-column justify-content-center" id="skills">
      <h2 className="mb-3">Skills</h2>
      <div className="subheading">Programming Languages &amp; Tools</div>
      <div className="language-tools-icons">
        {skillsArray.map(({ icon, tooltip }) => (
          <OverlayTrigger 
            key={tooltip}
            placement="bottom" 
            overlay={<Tooltip>{tooltip}</Tooltip>}
          >
            <FontAwesomeIcon  icon={icon} />
          </OverlayTrigger>
        ))}
        <OtherSkillIcons />
      </div>
      <ul className="mt-4">
        <li>Over 4 years experience using the MEEN stack (MongoDB, Express.js, Ember.js, Node.js)</li>
        <li>Projects can be viewed on my <a href="https://github.com/marshy2201" target="_blank" rel="noopener noreferrer" className="text-blue">Github</a></li>
        <li>
          Skills I have studied can be viewed on my <a href="https://teamtreehouse.com/lewismarshall" target="_blank" rel="noopener noreferrer" className="text-blue">treehouse</a> profile
        </li>
      </ul>
    </section>
  )
}

export default Skills;