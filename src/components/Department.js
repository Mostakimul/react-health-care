import React from 'react';

const Department = (props) => {
  const { title, details } = props.dep;
  const TheIcon = props.dep.icon;
  return (
    <div className="bg-white hover:bg-gray-100 rounded-lg shadow-lg text-center p-4">
      <TheIcon className="w-20 h-20 mx-auto text-blue-700" />
      <h3 className="text-xl font-medium">{title}</h3>
      <p>{details}</p>
    </div>
  );
};

export default Department;
