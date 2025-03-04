import { useEffect, useState } from 'react';
import s from './Kotopad.module.css';

export const Kotopad = () => {
  const [bgColor, setBgColor] = useState('rgba(255, 47, 152, 0)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgColor('rgba(255, 47, 152, 1)');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={s.container} style={{ backgroundColor: { bgColor } }}></div>
  );
};
