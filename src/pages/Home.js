import React from 'react';
import TheCounter from '../components/TheCounter';
import TheHeader from '../components/TheHeader';

const Home = () => {
  return (
    <div>
      {/* The Header */}
      <TheHeader />
      {/* Counter Div */}
      <div>
        <TheCounter />
      </div>
    </div>
  );
};

export default Home;
