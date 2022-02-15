import React, { useEffect, useState } from 'react';
// import { transactionOperation, transactionSelectors } from '../../redux/transaction';
// import { useDispatch, useSelector } from 'react-redux';

import ModalForDelete from './ModalForDelete';
import TransactionsList from './TransactionsList';
import TransactionsTabsHistory from './TransactionsTabsHistory';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function TransactionsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  console.log(
    '🚀 ~ file: TransactionsWrap.js ~ line 18 ~ TransactionsWrapper ~ isMobile',
    isMobile,
  );
  // const dispatch = useDispatch();

  // const transactions = useSelector(transactionSelectors.getAllTransactions);

  // const month = useSelector(transactionSelectors.getSelectedMonth);
  // const year = useSelector(transactionSelectors.getSelectedYear);

  // useEffect(() => {
  //   dispatch(transactionOperation.fetchAllTransactionsByMonth({ month, year }));
  // }, [dispatch, month, year]);

  function showModal(transactionId) {
    setIsModalOpen(true);
    setSelectedTransaction(transactionId);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  const transactions = [
    {
      category: 'Транспорт',
      dayCreate: 14,
      description: 'Ремонт старой двери',
      idT: 111111111111,
      monthCreate: 2,
      sum: '5000',
      transactionType: 'expense',
      yearCreate: 2022,
    },
    {
      category: 'Транспорт',
      dayCreate: 1,
      description: 'rbndndfn',
      idT: 2222222222,
      monthCreate: 2,
      sum: '10000',
      transactionType: 'income',
      yearCreate: 2022,
    },
  ];

  return (
    <>
      <ModalForDelete
        isOpen={isModalOpen}
        onClose={closeModal}
        transactionId={selectedTransaction}
        // transactions={transactions}
      />
      {isMobile ? (
        <TransactionsList deleteDialogHandler={showModal} transactions={transactions} />
      ) : (
        <TransactionsTabsHistory deleteDialogHandler={showModal} transactions={transactions} />
      )}
    </>
  );
}

export default TransactionsWrapper;
