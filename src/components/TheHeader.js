import React from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../images/home-slider-bg.jpg';

const TheHeader = () => {
  return (
    <div
      style={{
        background: `linear-gradient(0deg
          , #11182773, #111827), url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="py-2 min-h-screen"
    >
      <div className="container md:flex md:flex-row-reverse md:justify-between md:items-center mt-4">
        {/* image Conatiner */}
        <div className="w-4/5 mx-auto">
          <img
            src="/img/covid-circle-image.png"
            alt="covid"
            className="animate-spin-slow w-full md:w-3/4 mx-auto"
          />
        </div>
        {/* Hero text */}
        <div className="text-center md:text-left mt-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl p-1">
            Stay Home And Be Aware About Covid-19
          </h1>
          <h3 className="text-white md:mr-10 font-normal text-base p-1 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </h3>

          <div className="flex justify-center md:justify-start items-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md mx-1"
            >
              Get Appointment
            </Link>
            <button className="bg-transparent border-2 border-white text-white font-medium px-4 py-2 rounded-md mx-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
