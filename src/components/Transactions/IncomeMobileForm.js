import GoToMainBtn from './GoToMainBtn';
import Transaction from './Transactions';
import incomeCategories from './incomeCategories.json';

const IncomeMobileForm = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="background-top background-top_for-mobile"></div>
      <GoToMainBtn />
      <Transaction isIncome={true} categories={incomeCategories} placeholder="Описание дохода" />
    </div>
  );
};
export default IncomeMobileForm;
