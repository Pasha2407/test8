import gifCat from '../../images/f1.gif';
import salut1 from '../../images/f2.gif';
import salut2 from '../../images/f3.gif';
import cat from '../../images/f4.png';
import s from './Finish.module.css';

export const Finish = () => {
  return (
    <div className={s.container}>
      <div className={s.upS}>
        <img src={salut2} alt="GIF" />
      </div>
      <div className={s.downS}>
        <img src={salut1} alt="GIF" />
        <img src={gifCat} alt="GIF" />
        <img src={salut1} alt="GIF" />
      </div>
      <div className={s.text}>
        <p>Вітаю з 8 березня</p>
        <p>Сонечко я тебе дуже люблю</p>
        <p>Ти в мене найкраща</p>
        <div className={s.sup}>
          <img src={cat} alt="IMG"></img>
          <span>
            Подаруночок появиться
            <br /> зверху через пару секунд
          </span>
        </div>
      </div>
    </div>
  );
};
