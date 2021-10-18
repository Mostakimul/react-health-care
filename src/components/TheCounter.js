import React from 'react';
import { FaHospitalAlt, FaStethoscope } from 'react-icons/fa';
import { HiEmojiHappy, HiOutlineUserGroup } from 'react-icons/hi';
import mapbg from '../images/map-bg.png';

const TheCounter = () => {
  return (
    <div
      style={{
        background: `linear-gradient(0deg
          , rgb(255 255 255 / 20%), rgb(255 255 255 / 70%)),url(${mapbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="py-4 md:w-9/12 md:mx-auto md:rounded md:shadow-lg md:-mt-20"
    >
      <div className="text-center space-y-3 md:flex md:justify-around md:items-center">
        <div>
          <FaHospitalAlt className="w-16 h-16 text-blue-800 mx-auto" />
          <p className="text-2xl font-medium text-blue-700">850</p>
          <p className="text-xl font-medium text-blue-700">Patients Beds</p>
        </div>
        <div>
          <HiOutlineUserGroup className="w-16 h-16 text-blue-800 mx-auto" />
          <p className="text-2xl font-medium text-blue-700">2300+</p>
          <p className="text-xl font-medium text-blue-700">Total Affected</p>
        </div>
        <div>
          <FaStethoscope className="w-16 h-16 text-blue-800 mx-auto" />
          <p className="text-2xl font-medium text-blue-700">750</p>
          <p className="text-xl font-medium text-blue-700">Doctors & Nurse</p>
        </div>
        <div>
          <HiEmojiHappy className="w-16 h-16 text-blue-800 mx-auto" />
          <p className="text-2xl font-medium text-blue-700">153</p>
          <p className="text-xl font-medium text-blue-700">Total Recovered</p>
        </div>
      </div>
    </div>
  );
};

export default TheCounter;
