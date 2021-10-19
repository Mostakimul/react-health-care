import React from 'react';
import Doctors from '../components/Doctors';
import ThePageHeader from '../components/ThePageHeader';

const AllDoctors = () => {
  return (
    <div>
      {/* The header */}
      <ThePageHeader header="Meet Our Qualified Doctors" />
      <Doctors></Doctors>
    </div>
  );
};

export default AllDoctors;
