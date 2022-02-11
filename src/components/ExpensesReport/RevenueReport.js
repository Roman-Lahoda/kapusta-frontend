import s from './Report.module.scss';
// import Diagram from '../Diagram/Diagram';

export default function RevenueReport() {
  return (
    <>
      <section>
        <ul>
          <li>
            <ul>
              <li>45 0000.00</li>
              <li>
                <svg className={s.expItem}></svg>
                <svg className={s.expItemBg}></svg>
              </li>
              <li>ЗП</li>
            </ul>
          </li>
          <svg></svg>
          <li>
            <ul>
              <li>1 500.00</li>
              <li>
                <svg className={s.expItem}></svg>
                <svg className={s.expItemBg}></svg>
              </li>
              <li>ДОП. ДОХОД</li>
            </ul>
          </li>
        </ul>
      </section>
      {/* <section className={s.expensesDiargBg}><Diargam /></section> */}
    </>
  );
}
