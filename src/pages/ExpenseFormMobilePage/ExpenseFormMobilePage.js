import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';
import Header from '../../components/Header/Header.js';
import ExpenseMobileForm from '../../components/Transactions/ExpenseMobileForm.js';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';

const ExpenseMobileFormPage = () => {
  const isLoading = useSelector(transactionSelectors.isLoading);
  // console.log(
  //   '🚀 ~ file: ExpenseFormMobilePage.js ~ line 10 ~ ExpenseMobileFormPage ~ isLoading',
  //   isLoading,
  // );
  return (
    <>
      {isLoading && <Loader />}
      <BackgroundHome />
      <Header />
      <ExpenseMobileForm />
    </>
  );
};

export default ExpenseMobileFormPage;
