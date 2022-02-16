import React, { useEffect, useState } from 'react';
// import { transactionOperation, transactionSelectors } from '../../redux/transaction';
// import { useDispatch, useSelector } from 'react-redux';

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
  // console.log(
  //   '🚀 ~ file: TransactionsWrap.js ~ line 17 ~ TransactionsWrapper ~ transactionsFromState',
  //   transactionsFromState,
  // );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const transactions = transactionsFromState;
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
  // console.log('Здесь прокидывать список всех транзакций');

  // const transactions = [
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 14,
  //     description: 'Ремонт старой двери',
  //     idT: 111111346111111,
  //     monthCreate: 2,
  //     sum: '5000',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 1,
  //     description: 'rbndndfn',
  //     idT: 2222235735222,
  //     monthCreate: 2,
  //     sum: '10000',
  //     transactionType: 'income',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 5,
  //     description: 'Ремонт старой двери',
  //     idT: 11117661111,
  //     monthCreate: 2,
  //     sum: '5000',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 10,
  //     description: 'rbndndfn',
  //     idT: 22203470002222,
  //     monthCreate: 2,
  //     sum: '10000',
  //     transactionType: 'income',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 9,
  //     description: 'Ремонт старой двери',
  //     idT: 1118641000111,
  //     monthCreate: 1,
  //     sum: '5000',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Все для дома',
  //     dayCreate: 11,
  //     description: 'toys',
  //     idT: 77733492777,
  //     monthCreate: 1,
  //     sum: '10000',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 28,
  //     description: 'Ремонт старой двери',
  //     idT: 111112361111111,
  //     monthCreate: 1,
  //     sum: '5000',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 9,
  //     description: 'car',
  //     idT: 55298555555,
  //     monthCreate: 2,
  //     sum: '10000',
  //     transactionType: 'income',
  //     yearCreate: 2022,
  //   },
  // ];

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
