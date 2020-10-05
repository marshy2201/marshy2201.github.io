import React from 'react';
import SocialIcons from './SocialIcons';

const About = () => (
  <section className="d-flex flex-column justify-content-center">
    <h1>Lewis <span className="surname">Marshall</span></h1>
    <div className="d-flex flex-column subheading mb-5">
      <span>07960072674</span>
      <a href="mailto:marshy2201@yahoo.co.uk">marshy2201@yahoo.co.uk</a>
    </div>
    <p className="lead">I am an organised, punctual, motivated and reliable person. I take a logical and methodical approach to work, and aim to complete tasks within the required timescale and to a high standard. I strive to develop my skills and knowledge further through practical experience and study.</p>
    <SocialIcons />
  </section>
)

export default About;