import React from 'react';
import { Slider, RecentRecipes } from '../components';

const HomePage = () => {
  return (
    <div className="min-h-almostFull">
      <Slider />
      <RecentRecipes />
    </div>
  );
};

export default HomePage;
