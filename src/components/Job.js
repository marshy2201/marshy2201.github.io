import React from 'react';

const Job = ({ position, company, about, responsibilities, from, to }) => {
  let resArray = '';

  if (responsibilities) {
    resArray = 
    <ul className="mb-4">
      {responsibilities.map((resp, index) => (<li key={index}>{ resp }</li>))}
    </ul>
  } 

  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="flex-grow-1">
        <h3>{ position }</h3>
        <div className="subheading text-uppercase mb-3">{ company }</div>
        <p>{ about }</p>
        { resArray }
      </div>
      <div className="flex-shrink-0 text-dark-blue">
        <span>{ from } - { to }</span>
      </div>
    </div>
  )
}

export default Job;