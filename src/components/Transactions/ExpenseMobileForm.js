import GoToMainBtn from './GoToMainBtn';
import Transactions from './Transactions';

const ExpenseMobileForm = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="background-top background-top_for-mobile"></div>
      <GoToMainBtn />
      <Transactions value="expense" />
    </div>
  );
};
export default ExpenseMobileForm;
