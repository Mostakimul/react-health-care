import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Doctor = (props) => {
  const { id, name, img, dept } = props.doctor;

  const history = useHistory();
  const gotoApponitment = () => {
    history.push('/appointment');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div>
        <img src={img} alt={name} className="rounded-t-lg w-full" />
      </div>
      <div className="text-center my-5 space-y-2">
        <Link
          to={`/doctor-details/${id}`}
          className="text-lg font-medium hover:text-blue-700"
        >
          {name}
        </Link>
        <p>{dept}</p>
        <button
          onClick={gotoApponitment}
          className="w-10/12 mx-auto bg-blue-800 text-white font-medium py-3 px-9 rounded-lg shadow-lg"
        >
          Get Appointment
        </button>
      </div>
    </div>
  );
};

export default Doctor;
