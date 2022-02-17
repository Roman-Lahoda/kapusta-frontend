import GoToMainBtn from './GoToMainBtn';
import InputTransactions from './InputTransactions';
import incomeCategories from './incomeCategories.json';
import { Button, ButtonGroup } from '@mui/material';

const IncomeMobileForm = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div class="background-top background-top_for-mobile"></div>
      <GoToMainBtn />
      <InputTransactions
        isIncome={true}
        categories={incomeCategories}
        placeholder="Описание дохода"
        value="income"
      />
    </div>
  );
};
export default IncomeMobileForm;
