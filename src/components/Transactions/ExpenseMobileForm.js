import GoToMainBtn from './GoToMainBtn';
import InputTransactions from './InputTransactions';

const ExpenseMobileForm = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="background-top background-top_for-mobile"></div>
      <GoToMainBtn />
      <InputTransactions value="expense" />
    </div>
  );
};
export default ExpenseMobileForm;
