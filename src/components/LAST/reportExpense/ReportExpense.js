import sprite from '../../../images/sprite_categories.svg';
import css from './CategoriesList.module.css';

const contacts = [
    {
      id: 'id-4',
      description: 'qwe',
      category: 'Техника',
      categorySum: '2000',
      transactionType: 'expense',
    },
    {
      id: 'id-5',
      description: 'qwe',
      category: 'Образование',
      categorySum: '2000',
      transactionType: 'expense',
    },
    {
      id: 'id-6',
      description: 'qwe',
      category: 'Транспорт',
      categorySum: '1000',
      transactionType: 'expense',
    },
    {
      id: 'id-7',
      description: 'qwe',
      category: 'Продукты',
      categorySum: '1900',
      transactionType: 'expense',
    },
  ],
  ReportExpense = () => {
    return (
      <ul className={css.list}>
        {contacts?.length === 0 ? (
          <h3 className={css.title_message}>По данном месяцу категорий не найдено.</h3>
        ) : (
          contacts?.map(obj => (
            <li key={obj.category} className={css.item}>
              <p className={css.text}>{obj.categorySum} </p>
              <div className={obj.isActive ? css.svg_boxActive : css.svg_box}>
                <svg width="58" height="58" className={obj.isActive ? css.iconActive : css.icon}>
                  <use xlinkHref={`${sprite}#icon-${obj.category}`} />
                </svg>
              </div>
              <h3 className={css.title}>{obj.category}</h3>
            </li>
          ))
        )}
      </ul>
    );
  };

export default ReportExpense;
