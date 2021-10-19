import React from 'react';
import {
  FaAmbulance,
  FaBaby,
  FaBed,
  FaDna,
  FaTeeth,
  FaXRay,
} from 'react-icons/fa';
import { GiTestTubes } from 'react-icons/gi';
import { ImLab, ImUserTie } from 'react-icons/im';
import Department from './Department';
const Departments = () => {
  const departs = [
    {
      icon: FaTeeth,
      title: 'Dental Care',
      details: 'Best Dental care you will have in the country.',
    },
    {
      icon: FaBaby,
      title: 'Baby Care',
      details: 'One of the best baby care in the region',
    },
    {
      icon: ImLab,
      title: 'Laboratory',
      details: 'Fast Laborotory services with experts',
    },
    {
      icon: FaBed,
      title: 'ICU',
      details: '24 ICU bed with modern facility in the country',
    },
    {
      icon: FaDna,
      title: 'DNA Test',
      details: 'Super fast DNA test result within 2 hours',
    },
    {
      icon: ImUserTie,
      title: 'Surgeon',
      details: 'Best surgeon from country and aborad',
    },
    {
      icon: FaXRay,
      title: 'X-ray',
      details: 'hihg quality xray machine from abroad',
    },
    {
      icon: GiTestTubes,
      title: 'Blood test',
      details: 'Modern way to test in the labo',
    },
    {
      icon: FaAmbulance,
      title: 'Ambulance Service',
      details: 'Quick and fast 24/7 ambulance services',
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5 p-5 rounded shadow-sm">
        {departs.map((dep) => (
          <Department key={dep.icon} dep={dep} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
