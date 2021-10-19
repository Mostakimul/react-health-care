import React from 'react';
import ThePageHeader from '../components/ThePageHeader';

const Contact = () => {
  return (
    <div>
      <ThePageHeader header="Contact Us" />
      <div className="bg-gray-200">
        <div className="container py-10">
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
            {/* Text */}
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
            ></textarea>

            {/* Button */}
            <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 w-full my-1.5 rounded-md shadow-md">
              Contact now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
