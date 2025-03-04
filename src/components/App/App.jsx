import { FirstButton } from 'components/FirstButton/FirstButton';
import React, { useState } from 'react';
import s from './App.module.css';
import gifCats from '../../images/cats.gif';
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import { Kotopad } from 'components/Kotopad/Kotopad';

export const App = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [showKotopad, setShowKotopad] = useState(false);

  const handleClick = () => {
    setIsZoomed(true);
  };

  const handleAnimationEnd = () => {
    setShowGif(true);
  };

  const startKotopad = () => {
    setShowKotopad(true);
  };

  return (
    <div className={s.app}>
      <FirstButton
        handleClick={handleClick}
        isZoomed={isZoomed}
        handleAnimationEnd={handleAnimationEnd}
      />
      {showGif && (
        <img src={gifCats} alt="GIF" className={s.gif} onClick={startKotopad} />
      )}
      {showGif && (
        <div className={s.textUp}>
          <p>
            Вумнічка <img src={s1} alt="s1"></img>
          </p>
          <p>
            Тепер натисни на котиків <img src={s2} alt="s2"></img>
          </p>
        </div>
      )}
      {showKotopad && <Kotopad />}
    </div>
  );
};
