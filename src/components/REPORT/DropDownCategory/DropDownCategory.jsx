import PropTypes from 'prop-types';
import s from './DropDownCategory.module.css';

export default function DropDownCategory({
  changerDescription,
  categoriesList,
  typeForm,
}) {
  const typeFormFilter = categoriesList.filter(el => el.type === typeForm);
  return (
    <div className={s.categoryPosition}>
      <ul>
        {typeFormFilter.map(el => (
          <li
            value={el.name}
            className={s.categoryName}
            key={el._id}
            onClick={() => {
              changerDescription(el.name, el._id);
            }}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

DropDownCategory.propTypes = {
  changerDescription: PropTypes.func.isRequired,
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.bool.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ),
  typeForm: PropTypes.bool.isRequired,
};
