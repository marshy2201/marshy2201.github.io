import React from 'react';

const Course = ({ course, website, link, completed }) => (
  <div className="mb-4">
    <h3>{course}</h3>
    <div className="subheading">
      <a href={link} target="_blank" rel="noopener noreferrer">{website}</a>
    </div>
    <span>{completed}</span>
  </div>
)

export default Course;