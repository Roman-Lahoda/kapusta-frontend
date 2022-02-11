import s from './TransactionInput.module.scss';

import DescriptionInput from 'components/DescriptionInput';
import DropList from 'components/DropList/DropList';
import Calculator from 'components/Calculator';

function TransactionInput({ transactionType, value, onChange }) {
  const { category, title, description } = transactionType;

  return (
    <div className={s.container}>
      <DescriptionInput descriptionTitle={description} />
      <DropList categories={category} categoryTitle={title} data={value} onChange={onChange} />
      <Calculator />
    </div>
  );
}

export default TransactionInput;
