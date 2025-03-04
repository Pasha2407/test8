import React, { useState } from 'react';
import gifCats from '../../images/cats.gif';
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import { FirstButton } from 'components/FirstButton/FirstButton';
import { Kotopad } from 'components/Kotopad/Kotopad';
import s from './App.module.css';

export const App = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [showKotopad, setShowKotopad] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) return;
    setIsZoomed(true);
    setIsClicked(true);
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
        isClicked={isClicked}
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
      {showKotopad && <Kotopad s1={s1} s2={s2} />}
    </div>
  );
};
