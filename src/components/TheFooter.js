import React from 'react';
import { Link } from 'react-router-dom';

const TheFooter = () => {
  return (
    <div>
      <div className="bg-blue-600">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10 text-white">
            {/* conatct */}
            <div className="space-y-3 ">
              <h3 className="font-semibold text-2xl">Contact Us</h3>
              <p>Email: hello@disin.com</p>
              <p>Phone: +70 554 2254</p>
              <p>Location: Via Rogoredo, Mialn, Italy</p>
            </div>
            {/* page link */}
            <div>
              <h3 className="font-semibold text-2xl">Quick Links</h3>
              <Link to="/" className="block">
                Home
              </Link>
              <Link to="/all-doctors" className="block">
                All Doctors
              </Link>
              <Link to="/contact-us" className="block">
                Contact Us
              </Link>
              <Link to="/contact-us" className="block">
                Login
              </Link>
              <Link to="/register" className="block">
                Register
              </Link>
            </div>
            {/* seriveces */}
            <div>
              <h3 className="font-semibold text-2xl">Our Services</h3>
              <p>Expert Doctor</p>
              <p>Ambulance</p>
              <p>Diagnosis</p>
              <p>Phatology</p>
              <p>Dental Care</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div className="bg-blue-900 py-2 text-center">
        <p className="text-white font-semibold text-base">
          Copyright &#169;2021 Developed by Mostakimul Karim
        </p>
      </div>
    </div>
  );
};

export default TheFooter;
