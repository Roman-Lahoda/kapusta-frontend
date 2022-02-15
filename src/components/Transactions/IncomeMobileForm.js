import GoToMainBtn from './GoToMainBtn';
import Transactions from './Transactions';
import incomeCategories from './incomeCategories.json';

const IncomeMobileForm = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="background-top background-top_for-mobile"></div>
      <GoToMainBtn />
      <Transactions
        isIncome={true}
        categories={incomeCategories}
        placeholder="Описание дохода"
        value="income"
      />
    </div>
  );
};
export default IncomeMobileForm;
