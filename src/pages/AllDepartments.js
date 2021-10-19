import React from 'react';
import Departments from '../components/Departments';
import ThePageHeader from '../components/ThePageHeader';

const AllDepartments = () => {
  return (
    <div>
      <ThePageHeader header="All Departments" />
      <Departments />
    </div>
  );
};

export default AllDepartments;
