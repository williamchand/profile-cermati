import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import {uHomeBody} from './styles';

function HomePage() {
  
  return (
    <div className={uHomeBody}>
      <Hero/>
      <Highlights />
    </div>
  );
}

export default HomePage;
