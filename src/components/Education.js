import React from 'react';
import Course from './Course';

const Education = () => (
  <section className="d-flex flex-column justify-content-center" id="education">
    <h2 className="mb-4">Education</h2>
    <Course 
      course="Learn React" 
      website="teamtreehouse.com"
      link="https://teamtreehouse.com/lewismarshall"
      completed="September 2020" 
    />
    <Course 
      course="MongoDB Javascript Developer" 
      website="university.mongodb.com"
      link="https://university.mongodb.com/"
      completed="October 2019" 
    />
    <Course 
      course="MongoDB Aggregation Framework" 
      website="university.mongodb.com"
      link="https://university.mongodb.com/"
      completed="August 2019" 
    />
    <Course 
      course="MongoDB Basics" 
      website="university.mongodb.com"
      link="https://university.mongodb.com/"
      completed="May 2019" 
    />
    <Course 
      course="Front End Web Development Track" 
      website="teamtreehouse.com"
      link="https://teamtreehouse.com/lewismarshall"
      completed="May 2017" 
    />
    <Course 
      course="Beginner JavaScript Track" 
      website="teamtreehouse.com"
      link="https://teamtreehouse.com/lewismarshall"
      completed="April 2017" 
    />
    <Course 
      course="Web Design Track" 
      website="teamtreehouse.com"
      link="https://teamtreehouse.com/lewismarshall"
      completed="December 2016" 
    />
  </section>
)

export default Education;