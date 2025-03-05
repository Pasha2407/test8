import { useEffect, useState } from 'react';
import k1 from '../../images/k1.png';
import k2 from '../../images/k2.png';
import k3 from '../../images/k3.png';
import k4 from '../../images/k4.png';
import k5 from '../../images/k5.png';
import k6 from '../../images/k6.png';
import k7 from '../../images/k7.png';
import k8 from '../../images/k8.png';
import s from './Kotopad.module.css';

const images = [k1, k2, k3, k4, k5, k6, k7, k8];
const MAX_CATS = 8;
const SIDE_MARGIN = 100;

const getUniqueLeftPosition = existingLefts => {
  const screenWidth = window.innerWidth;
  const minLeft = SIDE_MARGIN;
  const maxLeft = screenWidth - SIDE_MARGIN;
  let attempts = 0;
  while (attempts < 10) {
    const leftPx = Math.random() * (maxLeft - minLeft) + minLeft;
    const leftPercent = (leftPx / screenWidth) * 100;
    if (
      !existingLefts.some(prevLeft => Math.abs(prevLeft - leftPercent) < 10)
    ) {
      return leftPercent;
    }
    attempts++;
  }
  return ((Math.random() * (maxLeft - minLeft) + minLeft) / screenWidth) * 100;
};

export const Kotopad = ({ s1, s2 }) => {
  const [cats, setCats] = useState([]);
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCats(prevCats => {
        const existingLefts = prevCats.map(cat => cat.left);
        const newLeft = getUniqueLeftPosition(existingLefts);
        const newCat = {
          id: Math.random(),
          src: images[Math.floor(Math.random() * images.length)],
          left: newLeft,
        };
        if (prevCats.length >= MAX_CATS) {
          return [...prevCats.slice(1), newCat];
        }
        return [...prevCats, newCat];
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const clickCat = () => {
    if (showText) setCount(count + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={s.container}>
      {count < 10 && showText && (
        <div className={s.title}>
          <p className={s.bigText}>
            Почався котопад <img src={s1} alt="s1"></img>
          </p>
          <p className={s.smallText}>
            Тикай на котиків і отримаєш подарунок <img src={s2} alt="s2"></img>
          </p>
        </div>
      )}

      {count === 10 ? (
        <div className={s.finish}>Finish</div>
      ) : (
        cats.map(cat => (
          <img
            key={cat.id}
            src={cat.src}
            className={s.kotopad}
            onClick={clickCat}
            style={{ left: `${cat.left}%` }}
            alt="cat"
          />
        ))
      )}
    </div>
  );
};
