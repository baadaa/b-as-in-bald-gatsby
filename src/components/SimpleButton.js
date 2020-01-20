import React from 'react';

export default ({ cta, link, color }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="simple-button"
      style={{ backgroundColor: color }}
    >
      {cta}
    </button>
  </a>
);
