import React, { useEffect, useState } from 'react';
import ModalForDelete from './ModalForDelete';
import TransactionsList from './TransactionsList';
import TransactionsTabsHistory from './TransactionsTabsHistory';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
import { compareAsc } from 'date-fns';
// import { keyup } from './ModalForDelete.js';

function TransactionsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const transactions = useSelector(transactionSelectors.getListOfTransactions);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const sortRule = (a, b) => compareAsc(b.dateOfTransaction, a.dateOfTransaction);
  const sortTransactions = transactions
    ?.map(el => {
      return { ...el, dateOfTransaction: new Date(el.dateOfTransaction) };
    })
    ?.reverse()
    .sort(sortRule);
  function showModal(transactionId) {
    // console.log(
    //   '🚀 ~ file: TransactionsWrap.js ~ line 26 ~ showModal ~ transactionId',
    //   transactionId,
    // );
    // console.log('open modal');
    setIsModalOpen(true);
    setSelectedTransaction(transactionId);
  }
  function closeModal() {
    // console.log('close modal');
    // window.removeEventListener('keyup', keyup);
    // window.blur();
    setIsModalOpen(false);
  }
  // console.log('selectedTransaction idT', selectedTransaction?.idT);
  return (
    <>
      <ModalForDelete isOpen={isModalOpen} onClose={closeModal} transaction={selectedTransaction} />
      {isMobile ? (
        <TransactionsList deleteDialogHandler={showModal} transactions={sortTransactions} />
      ) : (
        <TransactionsTabsHistory deleteDialogHandler={showModal} transactions={sortTransactions} />
      )}
    </>
  );
}

export default TransactionsWrapper;
