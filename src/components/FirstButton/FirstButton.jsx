import s from './FirstButton.module.css';

export const FirstButton = ({ handleClick, isZoomed, handleAnimationEnd }) => {
  return (
    <button
      className={`${s.button} ${isZoomed ? s.zoom : ''}`}
      onClick={handleClick}
      onTransitionEnd={handleAnimationEnd}
    >
      Натисни на мене
    </button>
  );
};
