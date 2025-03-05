import s from './FirstButton.module.css';

export const FirstButton = ({
  handleClick,
  zoomButton,
  buttonAnimationEnd,
}) => {
  return (
    <button
      className={`${s.button} ${zoomButton ? s.zoom : ''}`}
      onClick={handleClick}
      onTransitionEnd={buttonAnimationEnd}
    >
      Натисни <br />
      на мене
    </button>
  );
};
