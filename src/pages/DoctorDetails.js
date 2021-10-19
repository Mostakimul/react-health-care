import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ThePageHeader from '../components/ThePageHeader';

const DoctorDetails = () => {
  const { docId } = useParams();
  const [docName, setDocName] = useState('');
  const [docImg, setDocImg] = useState('');
  const [docDept, setDocDept] = useState('');
  const [docDegree, setDocDegree] = useState('');
  const [docBio, setDocBio] = useState('');
  const [docEducation, setDocEducation] = useState('');
  let doc = [];

  // history
  const history = useHistory();
  const gotoApponitment = () => {
    history.push('/appointment');
  };
  // fetch all doctors
  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => filterDoctor(data));
    // eslint-disable-next-line
  }, []);

  const filterDoctor = (data) => {
    // eslint-disable-next-line
    const myDoc = data.find((d) => docId == d.id);
    doc.push(myDoc);
    // eslint-disable-next-line
    doc.map((doctor) => {
      const { name, img, dept, degree, bio, education } = doctor;
      setDocName(name);
      setDocBio(bio);
      setDocDegree(degree);
      setDocDept(dept);
      setDocEducation(education);
      setDocImg(img);
    });
  };
  return (
    <div>
      {/* Header section */}
      <ThePageHeader header={docName} />
      {/* Doc details section */}
      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* grid left side */}
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <img src={docImg} alt={docName} className="w-full rounded-lg" />
          </div>
          {/* grid right side */}
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl text-blue-600 text-center font-medium">
              {docName} ({docDept})
            </h2>
            <p className="text-center">{docDegree}</p>
            {/* bio */}
            <h3 className="text-2xl text-blue-600 mt-5 font-medium">Bio</h3>
            <p>{docBio}</p>
            {/* education */}
            <h3 className="text-2xl text-blue-600 mt-5 font-medium">
              Education
            </h3>
            <p>{docEducation}</p>
            <button
              onClick={gotoApponitment}
              className=" w-10/12 mx-auto mt-8 bg-blue-800 text-white font-medium py-3 px-9 rounded-lg shadow-lg"
            >
              Get Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
