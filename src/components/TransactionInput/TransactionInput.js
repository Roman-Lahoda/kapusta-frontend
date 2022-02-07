import s from './TransactionInput.module.scss';
// import { DescriptionInput, Droplist, PriceInput } from '..';
import DescriptionInput from 'components/DescriptionInput';
import Droplist from 'components/Droplist';
import Calculator from 'components/Calculator';

function TransactionInput({ transactionType, value, onChange }) {
  const { category, title, description } = transactionType;

  return (
    <div className={s.container}>
      <DescriptionInput descriptionTitle={description} />
      <Droplist categories={category} categoryTitle={title} data={value} onChange={onChange} />
      <Calculator />
    </div>
  );
}

export default TransactionInput;
