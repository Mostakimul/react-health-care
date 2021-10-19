import React from 'react';
import bgimg from '../images/page-banner3.jpg';

const ThePageHeader = (props) => {
  return (
    <div
      style={{
        background: `linear-gradient(0deg
, #11182773, #111827), url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-full py-10"
    >
      <div className="container">
        <h2 className="text-center text-3xl md:text-5xl text-white font-semibold">
          {props.header}
        </h2>
      </div>
    </div>
  );
};

export default ThePageHeader;
