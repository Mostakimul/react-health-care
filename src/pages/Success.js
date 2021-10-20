import React from 'react';
import { TiTick } from 'react-icons/ti';
const Success = () => {
  return (
    <div className="container text-center">
      <div className="my-5 bg-gray-100 rounded-md shadow-md p-10">
        <div className="bg-white w-28 mx-auto rounded-full p-3">
          <TiTick className="w-12 h-12 mx-auto text-blue-700" />
        </div>
        <h2 className="text-5xl font-medium py-5">
          Appointment taken successfully
        </h2>
      </div>
    </div>
  );
};

export default Success;
