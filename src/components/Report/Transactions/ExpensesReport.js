import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './Transactions.module.scss';
import sprite from '../../../images/spriteReport.svg';
import transactionSelectors from '../../../reduxV2/transaction/transaction-selector';
import Diagram from '../../Diagram/Diagram';

export function ExpensesReport() {
  const [currentCategory, setCurrentCategory] = useState('');
  // const [inFocus, setInFocus] = useState('');

  let report = useSelector(transactionSelectors.getReport);

  const expenseArray = report?.expense;

  const totalSum = category => {
    return report?.expense?.[category]?.reduce((a, b) => a + b.sum, 0);
  };

  // const foodTotalSum = report?.expense?.food?.reduce((a, b) => a + b.sum, 0);
  const foodTotalSum = totalSum('food');
  // const alcoholTotalSum = report?.expense?.alcohol?.reduce((a, b) => a + b.sum, 0);
  const alcoholTotalSum = totalSum('alcohol');
  // const entertainmentTotalSum = report?.expense?.entertainment?.reduce((a, b) => a + b.sum, 0);
  const entertainmentTotalSum = totalSum('entertainment');
  // const housingTotalSum = report?.expense?.housing?.reduce((a, b) => a + b.sum,
  const housingTotalSum = totalSum('housing');
  // const technicsTotalSum = report?.expense?.technics?.reduce((a, b) => a + b.su
  const technicsTotalSum = totalSum('technics');
  // const communalTotalSum = report?.expense?.communal?.reduce((a, b) => a + b.su
  const communalTotalSum = totalSum('communal');
  // const sportTotalSum = report?.expense?.sport?.reduce((a, b) => a + b.sum, 0);
  const sportTotalSum = totalSum('sport');
  // const educationTotalSum = report?.expense?.education?.reduce((a, b) => a + b.
  const educationTotalSum = totalSum('education');
  // const healthTotalSum = report?.expense?.health?.reduce((a, b) => a + b.sum, 0
  const healthTotalSum = totalSum('health');
  // const transportTotalSum = report?.expense?.transport?.reduce((a, b) => a + b.
  const transportTotalSum = totalSum('transport');
  // const otherTotalSum = report?.expense?.other?.reduce((a, b) => a + b.sum, 0);
  const otherTotalSum = totalSum('other');
  useEffect(() => {
    setCurrentCategory('');
    const expenseObj = report?.expense;
    let needCategory = '';
    if (expenseObj) {
      const keys = Object.keys(expenseObj);
      needCategory = keys?.find(key => expenseObj[key]?.length !== 0);
      if (needCategory?.length > 0) {
        setCurrentCategory(needCategory);
      }
    }

    const elements = document.querySelectorAll('.category-btn');
    const array = Array.from(elements);
    array.forEach(elem => elem.removeEventListener('click', choseNextCategory));
    array.forEach(elem => elem.addEventListener('click', choseNextCategory));
  }, [report]);

  const choseNextCategory = e => {
    if (currentCategory !== e.currentTarget.dataset.category) {
      console.log('test');
      setCurrentCategory(e.currentTarget.dataset.category);
    }
  };
  // console.log(currentCategory);

  // useEffect(() => {
  //   const elements = document.querySelectorAll('.category-btn');
  //   const array = Array.from(elements);
  //   array.forEach(elem => elem.removeEventListener('click', choseNextCategory));
  //   array.forEach(elem => elem.addEventListener('click', choseNextCategory));
  // }, [report]);

  const choseCategory = x => {
    if (currentCategory === x) {
      return 'hover';
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className={s.transactionsCategories}>
        <ul
          className={s.expensesCategories}
          // onClick={selectionCategory}
        >
          {foodTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(foodTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="food"
                data-focus={choseCategory('food')}
                data-category="food"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="food"
                >
                  <use href={`${sprite}#icon-products`}></use>
                </svg>
              </button>
              <p>ПРОДУКТЫ</p>
            </li>
          ) : null}
          {alcoholTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(alcoholTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="alcohol"
                data-focus={choseCategory('alcohol')}
                data-category="alcohol"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="alcohol"
                >
                  <use href={`${sprite}#icon-cocktail`}></use>
                </svg>
              </button>
              <p>АЛКОГОЛЬ</p>
            </li>
          ) : null}
          {entertainmentTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(entertainmentTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="entertainment"
                data-focus={choseCategory('entertainment')}
                data-category="entertainment"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="entertainment"
                >
                  <use href={`${sprite}#icon-kite`}></use>
                </svg>
              </button>
              <p>РАЗВЛЕЧЕНИЯ</p>
            </li>
          ) : null}

          {healthTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(healthTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="health"
                data-focus={choseCategory('health')}
                data-category="health"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="health"
                >
                  <use href={`${sprite}#icon-health`}></use>
                </svg>
              </button>
              <p>ЗДОРОВЬЕ</p>
            </li>
          ) : null}
          {transportTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(transportTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="transport"
                data-focus={choseCategory('transport')}
                data-category="transport"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="transport"
                >
                  <use href={`${sprite}#icon-car`}></use>
                </svg>
              </button>
              <p>ТРАНСПОРТ</p>
            </li>
          ) : null}
          {housingTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(housingTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="housing"
                data-focus={choseCategory('housing')}
                data-category="housing"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="housing"
                >
                  <use href={`${sprite}#icon-couch`}></use>
                </svg>
              </button>
              <p>ВСЕ ДЛЯ ДОМА</p>
            </li>
          ) : null}

          {technicsTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(technicsTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="technics"
                data-focus={choseCategory('technics')}
                data-category="technics"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="technics"
                >
                  <use href={`${sprite}#icon-tools`}></use>
                </svg>
              </button>
              <p>ТЕХНИКА</p>
            </li>
          ) : null}
          {communalTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(communalTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="communal"
                data-focus={choseCategory('communal')}
                data-category="communal"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="communal"
                >
                  <use href={`${sprite}#icon-invoice`}></use>
                </svg>
              </button>
              <p>КОММУНАЛКА, СВЯЗЬ</p>
            </li>
          ) : null}
          {sportTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(sportTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="sport"
                data-focus={choseCategory('sport')}
                data-category="sport"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="sport"
                >
                  <use href={`${sprite}#icon-hobby`}></use>
                </svg>
              </button>
              <p>СПОРТ, ХОББИ</p>
            </li>
          ) : null}

          {educationTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(educationTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="education"
                data-focus={choseCategory('education')}
                data-category="education"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="education"
                >
                  <use href={`${sprite}#icon-education`}></use>
                </svg>
              </button>
              <p>ОБРАЗОВАНИЕ</p>
            </li>
          ) : null}
          {otherTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(otherTotalSum)}.00</p>
              <button
                className={`${s.picBox} category-btn`}
                id="other"
                data-focus={choseCategory('other')}
                data-category="other"
              >
                <svg
                  width="59"
                  height="46"
                  // data-category="other"
                >
                  <use href={`${sprite}#icon-ufo`}></use>
                </svg>
              </button>
              <p>ПРОЧЕЕ</p>
            </li>
          ) : null}
        </ul>
      </div>
      <section className={s.diagramBg}>
        {expenseArray && <Diagram arrayOfData={expenseArray[currentCategory]} type="расходах" />}
      </section>
    </div>
  );
}
