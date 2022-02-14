import React, { useEffect, useState } from 'react';
// import { transactionOperation, transactionSelectors } from '../../redux/transaction';
// import { useDispatch, useSelector } from 'react-redux';

import ModalForDelete from './ModalForDelete';
import TransactionsList from './TransactionsList';
import TransactionsTabs from './TransactionsTabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function TransactionsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedTransaction, setSelectedTransaction] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();

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

  return (
    <>
      <ModalForDelete
        isOpen={isModalOpen}
        onClose={closeModal}
        // transactionId={selectedTransaction}
        // transactions={transactions}
      />
      {/* {isMobile ? (
        <TransactionsList deleteDialogHandler={showModal} transactions={transactions} />
      ) : (
        <TransactionsTabs deleteDialogHandler={showModal} transactions={transactions} />
      )} */}
    </>
  );
}

export default TransactionsWrapper;
