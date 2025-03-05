import { useEffect } from 'react';
import s from './Finish.module.css';

export const Finish = () => {
  useEffect(() => {
    const sendRequest = async () => {
      try {
        await fetch('http://localhost:4000/finish', { method: 'POST' });
      } catch (error) {
        console.error('Помилка при відправці запиту:', error);
      }
    };

    sendRequest();
  }, []);

  return (
    <div className={s.container}>
      <p>Finish</p>
    </div>
  );
};
