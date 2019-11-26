import React from 'react';
import Hero from './components/Hero';
import {uHomeBody} from './styles';

function HomePage() {
  
  return (
    <div className={uHomeBody}>
      <Hero/>
    </div>
  );
}

export default HomePage;
