import React from 'react';
import SocialIcon from './SocialIcon';
import { faGithub, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => (
  <div className="social-icons mt-4">
    <SocialIcon link="https://github.com/marshy2201" icon={faGithub} />
    <SocialIcon link="https://www.linkedin.com/in/lewis-marshall-64a3391b8/" icon={faLinkedinIn} />
    <SocialIcon link="https://www.facebook.com/marshy2201" icon={faFacebookF} />
  </div>
)

export default SocialIcons;