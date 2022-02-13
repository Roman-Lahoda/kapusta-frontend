import GoToMainBtn from './GoToMainBtn';
import Transaction from './Transactions';

const ExpenseMobileForm = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="background-top background-top_for-mobile"></div>
      <GoToMainBtn />
      <Transaction />
    </div>
  );
};
export default ExpenseMobileForm;
