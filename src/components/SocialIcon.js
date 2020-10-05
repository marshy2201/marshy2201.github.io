import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ link, icon }) => (
  <a href={link} className="bg-dark" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} />
  </a>
)

export default SocialIcon;