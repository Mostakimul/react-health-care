import React from 'react';
import TheCounter from '../components/TheCounter';
import TheFooter from '../components/TheFooter';
import TheHeader from '../components/TheHeader';

const Home = () => {
  return (
    <div>
      {/* The Header */}
      <TheHeader />
      {/* Counter Div */}
      <div className="mb-4">
        <TheCounter />
      </div>
      {/* Footer */}
      <TheFooter />
    </div>
  );
};

export default Home;
