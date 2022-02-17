import React, { useEffect, useState } from 'react';
import ModalForDelete from './ModalForDelete';
import TransactionsList from './TransactionsList';
import TransactionsTabsHistory from './TransactionsTabsHistory';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';

function TransactionsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const transactionsFromState = useSelector(transactionSelectors.getListOfTransactions);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const transactions = transactionsFromState;

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
        transactionId={selectedTransaction}
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
