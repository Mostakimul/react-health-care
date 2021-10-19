import React from 'react';
import {
  ImAccessibility,
  ImContrast,
  ImFileText,
  ImGrin2,
  ImHeartBroken,
  ImProfile,
  ImStatsBars,
  ImUserTie,
} from 'react-icons/im';
import Service from './Service';

const Services = () => {
  const datas = [
    {
      icon: ImUserTie,
      title: 'Expert Doctor',
      details: 'Best doctor will give you the best services',
    },
    {
      icon: ImAccessibility,
      title: 'Ambulance',
      details: 'All time 24/7 ambulance are ready to pick up patient',
    },
    {
      icon: ImContrast,
      title: 'Medicine',
      details: 'We give free medicine for general people',
    },
    {
      icon: ImFileText,
      title: 'Diagnosis',
      details: 'Fast diagnosis report are generated',
    },
    {
      icon: ImStatsBars,
      title: 'Phatology',
      details: 'The best phatology department you will find in the city',
    },
    {
      icon: ImHeartBroken,
      title: 'Cardiology',
      details: 'Best cardiology department int he country',
    },
    {
      icon: ImGrin2,
      title: 'Detal Care',
      details: 'Detist are more than 5 years experienced',
    },
    {
      icon: ImProfile,
      title: 'Neurology',
      details: 'Foreign neurologist will take care of you',
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5">
        {datas.map((data) => (
          <Service key={data.icon} data={data}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
