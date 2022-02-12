import sprite from '../../images/hero-sprite.svg';
import s from './Hero.module.scss'
function Hero() {
    return (
        <div className={s.container}>
            <svg className={s.title}>
                <use href={`${sprite}#icon-Union`}></use>
            </svg>
            <p className={s.text}>Smart Finance</p>
        </div>
    );
}
export default Hero;