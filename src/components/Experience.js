import React from 'react';
import Job from './Job';

const Experience = () => (
  <section id="experience">
    <h2 className="mb-4">Experience</h2>
    <Job 
      position="Web Developer"
      company="Luxinar"
      about="Developer for a Laser manufacturing company where my role was to develop a new version of an internal web application used all around the company."
      responsibilities={[
        "Developed the new internal web application using ember.js, node.js & MongoDB.",
        "Designed a web interface for the latest laser products displaying diagnostics information and was developed using jQuery.",
        "Showed presentational demos of new or improved applications to business users taking feedback.",
        "Provided training for other developers with ember.js, node.js & MongoDB.",
        "Worked using the waterfall environment method."
      ]}
      from="July 2017"
      to="October 2020"
    />
  </section>
)

export default Experience; 