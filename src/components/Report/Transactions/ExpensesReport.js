import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './Transactions.module.scss';
import sprite from '../../../images/spriteReport.svg';
import transactionSelectors from '../../../reduxV2/transaction/transaction-selector';
import Diagram from '../../Diagram/Diagram';

export function ExpensesReport() {
  const [currentCategory, setCurrentCategory] = useState('');
  let report = useSelector(transactionSelectors.getReport);

  const foodTotalSum = report?.expense?.food?.reduce((a, b) => a + b.sum, 0);

  const alcoholTotalSum = report?.expense?.alcohol?.reduce((a, b) => a + b.sum, 0);
  const expenseArray = report?.expense;
  const entertainmentTotalSum = report?.expense?.entertainment?.reduce((a, b) => a + b.sum, 0);
  const housingTotalSum = report?.expense?.housing?.reduce((a, b) => a + b.sum, 0);
  const technicsTotalSum = report?.expense?.technics?.reduce((a, b) => a + b.sum, 0);
  const communalTotalSum = report?.expense?.communal?.reduce((a, b) => a + b.sum, 0);
  const sportTotalSum = report?.expense?.sport?.reduce((a, b) => a + b.sum, 0);
  const educationTotalSum = report?.expense?.education?.reduce((a, b) => a + b.sum, 0);
  const healthTotalSum = report?.expense?.health?.reduce((a, b) => a + b.sum, 0);
  const transportTotalSum = report?.expense?.transport?.reduce((a, b) => a + b.sum, 0);
  const otherTotalSum = report?.expense?.other?.reduce((a, b) => a + b.sum, 0);

  const [inFocus, setInFocus] = useState('');

  useEffect(() => {
    // setInFocus('hover');
    setCurrentCategory('');
    const expenseObj = report?.expense;
    let neadCategory = '';
    if (expenseObj) {
      const keys = Object.keys(expenseObj);
      neadCategory = keys?.find(key => expenseObj[key]?.length !== 0);
      if (neadCategory?.length > 0) {
        // console.log('neadCategory is :', neadCategory);
        setCurrentCategory(neadCategory);
        // console.log(element);
        // if (currentCategory?.length > 0) {
        //   // console.log(currentCategory);
        //   const element = document.getElementById(currentCategory);
        //   element?.setAttribute('data-focus', 'hover');
        // }
      }
    }
  }, [report]);

  // useEffect(() => {
  //   if (currentCategory !== 'food') {
  //     setInFocus('');
  //   }
  // });

  const choseCategory = x => {
    if (currentCategory === x) {
      return 'hover';
    } else {
      return null;
    }
  };

  const selectionCategory = event => {
    if (event.target.nodeName === 'svg') {
      setCurrentCategory(event.target.dataset.category);
    }
  };

  return (
    <div>
      <div className={s.transactionsCategories}>
        <ul className={s.expensesCategories} onClick={selectionCategory}>
          {foodTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(foodTotalSum)}.00</p>
              <div className={s.picBox} id="food" data-focus={choseCategory('food')}>
                <svg width="59" height="46" data-category="food">
                  <use href={`${sprite}#icon-products`}></use>
                </svg>
              </div>
              <p>ПРОДУКТЫ</p>
            </li>
          ) : null}
          {alcoholTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(alcoholTotalSum)}.00</p>
              <div className={s.picBox} id="alcohol" data-focus={choseCategory('alcohol')}>
                <svg width="59" height="46" data-category="alcohol">
                  <use href={`${sprite}#icon-cocktail`}></use>
                </svg>
              </div>
              <p>АЛКОГОЛЬ</p>
            </li>
          ) : null}
          {entertainmentTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(entertainmentTotalSum)}.00</p>
              <div
                className={s.picBox}
                id="entertainment"
                data-focus={choseCategory('entertainment')}
              >
                <svg width="59" height="46" data-category="entertainment">
                  <use href={`${sprite}#icon-kite`}></use>
                </svg>
              </div>
              <p>РАЗВЛЕЧЕНИЯ</p>
            </li>
          ) : null}

          {healthTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(healthTotalSum)}.00</p>
              <div className={s.picBox} id="health" data-focus={choseCategory('health')}>
                <svg width="59" height="46" data-category="health">
                  <use href={`${sprite}#icon-health`}></use>
                </svg>
              </div>
              <p>ЗДОРОВЬЕ</p>
            </li>
          ) : null}
          {transportTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(transportTotalSum)}.00</p>
              <div className={s.picBox} id="transport" data-focus={choseCategory('transport')}>
                <svg width="59" height="46" data-category="transport">
                  <use href={`${sprite}#icon-car`}></use>
                </svg>
              </div>
              <p>ТРАНСПОРТ</p>
            </li>
          ) : null}
          {housingTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(housingTotalSum)}.00</p>
              <div className={s.picBox} id="housing" data-focus={choseCategory('housing')}>
                <svg width="59" height="46" data-category="housing">
                  <use href={`${sprite}#icon-couch`}></use>
                </svg>
              </div>
              <p>ВСЕ ДЛЯ ДОМА</p>
            </li>
          ) : null}

          {technicsTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(technicsTotalSum)}.00</p>
              <div className={s.picBox} id="technics" data-focus={choseCategory('technics')}>
                <svg width="59" height="46" data-category="technics">
                  <use href={`${sprite}#icon-tools`}></use>
                </svg>
              </div>
              <p>ТЕХНИКА</p>
            </li>
          ) : null}
          {communalTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(communalTotalSum)}.00</p>
              <div className={s.picBox} id="communal" data-focus={choseCategory('communal')}>
                <svg width="59" height="46" data-category="communal">
                  <use href={`${sprite}#icon-invoice`}></use>
                </svg>
              </div>
              <p>КОММУНАЛКА, СВЯЗЬ</p>
            </li>
          ) : null}
          {sportTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(sportTotalSum)}.00</p>
              <div className={s.picBox} id="sport" data-focus={choseCategory('sport')}>
                <svg width="59" height="46" data-category="sport">
                  <use href={`${sprite}#icon-hobby`}></use>
                </svg>
              </div>
              <p>СПОРТ, ХОББИ</p>
            </li>
          ) : null}

          {educationTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(educationTotalSum)}.00</p>
              <div className={s.picBox} id="education" data-focus={choseCategory('education')}>
                <svg width="59" height="46" data-category="education">
                  <use href={`${sprite}#icon-education`}></use>
                </svg>
              </div>
              <p>ОБРАЗОВАНИЕ</p>
            </li>
          ) : null}
          {otherTotalSum ? (
            <li className={s.item}>
              <p>{new Intl.NumberFormat('ru-RU').format(otherTotalSum)}.00</p>
              <div className={s.picBox} id="other" data-focus={choseCategory('other')}>
                <svg width="59" height="46" data-category="other">
                  <use href={`${sprite}#icon-ufo`}></use>
                </svg>
              </div>
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
