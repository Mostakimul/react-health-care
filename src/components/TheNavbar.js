import { Disclosure } from '@headlessui/react';
import { React } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const TheNavbar = () => {
  const { user, logOut } = useAuth();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/img/logo.png"
                    alt="Disin"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/img/logo.png"
                    alt="Disin"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Home
                    </Link>
                    <Link
                      to="/all-doctors"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      All Doctors
                    </Link>
                    <Link
                      to="/all-departments"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Departments
                    </Link>
                    <Link
                      to="/contact-us"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/appointment"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Get Appointment
                    </Link>
                    {!user?.email ? (
                      <>
                        <Link
                          to="/login"
                          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Register
                        </Link>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 block sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white">
                  {user?.displayName}
                </div>
                <div className="ml-3 relative">
                  <div>
                    <div className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      {user?.email ? (
                        <button onClick={logOut}>
                          <FaSignOutAlt
                            className="w-5 h-5 text-white
                      bg-gray-900 rounded-full"
                          />
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Register
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TheNavbar;
