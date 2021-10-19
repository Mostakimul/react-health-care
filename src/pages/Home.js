import React from 'react';
import Doctors from '../components/Doctors';
import Services from '../components/Services';
import TheCounter from '../components/TheCounter';
import TheHeader from '../components/TheHeader';

const Home = () => {
  return (
    <main>
      {/* The Header */}
      <TheHeader />
      {/* Counter Div */}
      <section className="mb-4">
        <TheCounter />
      </section>
      {/* doctor section */}
      <section className="py-10">
        <h2 className="text-center text-4xl font-semibold my-5 py-5 text-blue-700">
          Our Qualified Doctors
        </h2>
        <Doctors />
      </section>
      {/* Services section */}
      <section className="mb-10">
        <h2 className="text-center text-4xl font-semibold my-5 py-5 text-blue-700">
          Our Hospital Services
        </h2>
        <Services></Services>
      </section>
    </main>
  );
};

export default Home;
