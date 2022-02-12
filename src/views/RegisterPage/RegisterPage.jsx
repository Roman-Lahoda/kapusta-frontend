import RegisterForm from '../../components/Forms/RegisterForm';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
  return (
    <div className={s.wrap}>
      <div className={s.titleWrap}>
        <h1 className={s.title}>
          Kapu<span>$</span>ta
        </h1>
        <p className={s.subTitle}>Smart Finance</p>
      </div>

      <RegisterForm />
    </div>
  );
}
