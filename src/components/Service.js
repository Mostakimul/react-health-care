import React from 'react';

const Service = (props) => {
  const { title, details } = props.data;
  const TheIcon = props.data.icon;
  return (
    <div className="bg-white rounded-lg shadow-lg text-center p-4">
      <TheIcon className="w-20 h-20 mx-auto text-blue-700" />
      <h3 className="text-xl font-medium">{title}</h3>
      <p>{details}</p>
    </div>
  );
};

export default Service;
