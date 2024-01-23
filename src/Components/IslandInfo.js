import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/IslandInfo.css';

const IslandInfo = ({ videoSource, title, texts }) => {
  return (
    <div className='island-info-block-container'>
      <div className='island-word-container'>
          <h1>{title}</h1>
          <video className='island-video' autoPlay muted>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
          </video>
          <div className='flavor-text'>
            {Array.isArray(texts) && texts.map((text, index) => (
                <h4 key={index}>{text}</h4>
            ))}
          </div>
      </div>
    </div>
  )
};

IslandInfo.propTypes = {
  videoSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IslandInfo;