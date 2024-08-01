import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const EmailIcon = () => (
  <a href="mailto:deman@uoregon.edu" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaEnvelope className="email-icon" />
  </a>
);

export default EmailIcon;