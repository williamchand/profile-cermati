import React from 'react';
import {uHero, uHeroSecond, uLogo, uHeroParagraphOne, uHeroParagraphTwo, uHeroParagraphThree, uHeroButton, uHeroParagraph} from './styles';
import logo from '../../../../assets/y-logo-white.png';

function Hero() {
  return (
    <div className={uHero}>
      <div className={uHeroSecond}>
        <img className={uLogo} src={logo} alt="" />
        <div className={uHeroParagraph}>
          <div className={uHeroParagraphOne}>
            Hello! I'm William Chandra
          </div>
          <div className={uHeroParagraphTwo}>
            <b>Consult, Design, and Develop Websites</b>
          </div>
          <div className={uHeroParagraphThree}>
            Have something great in mind? Feel free to contact me.<br />
            I'll help you to make it happen.
          </div>
          <button className={uHeroButton}>
            Let's Make Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
