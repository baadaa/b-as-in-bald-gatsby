import React from 'react';

export default ({ isVimeo, isWide, isKoroseal, link }) => {
  let classNameStr = 'emb-video';
  classNameStr += isVimeo ? ' vimeo' : '';
  classNameStr += isWide ? ' wide' : '';
  classNameStr += isKoroseal ? ' koro' : '';
  return (
    <div className={classNameStr}>
      <iframe
        title="Embedded Video"
        src={link}
        width="320"
        height="180"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></iframe>
    </div>
  );
};
