import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Doctor from './Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  // fetch all doctors
  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      {/* Doctors section */}
      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* single card */}
          {doctors.length ? (
            doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))
          ) : (
            <div className="text-center">
              <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
