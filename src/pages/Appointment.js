import React from 'react';
import ThePageHeader from '../components/ThePageHeader';

const Appointment = () => {
  return (
    <div>
      <ThePageHeader header="Get Your Appointment" />
      <div className="bg-gray-100">
        <div className="container">
          <form className="space-y-3 bg-gray-100 p-5 rounded-md w-full md:w-2/5 mx-auto">
            {/* Name */}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
            />
            {/* Email */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
            />
            {/* Phone */}
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
            />
            {/* Age */}
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
            />
            {/* Doctor */}
            <label
              htmlFor="doctor"
              className="block text-sm font-medium text-gray-700"
            >
              Doctor
            </label>
            <select
              name="doctor"
              id="doctor"
              className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
            >
              <option disabled value="">
                Choose Doctor
              </option>
              <option value="steve">Steven King</option>
              <option value="sarah">Sarah Taylor</option>
              <option value="smith">john Smith</option>
            </select>
            {/* Button */}
            <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 w-full my-1.5 rounded-md shadow-md">
              Get now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
