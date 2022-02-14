import { LinearProgress } from '@mui/material';
import React from 'react';
import TransactionsItem from './TransactionsItem';
import TransactionsButtons from './TransactionsButtons';
// import { transactionsSelectors } from '../../redux/transaction';
// import { useSelector } from 'react-redux';

function TransactionsList({ deleteDialogHandler }) {
  //   const transactions = useSelector(transactionsSelectors.getAllTransactions);
  const transactions = [
    {
      category: 'Продукты',
      dayCreate: 14,
      description: 'erbdnbdf',
      id: 123456789,
      monthCreate: 2,
      sum: '7827',
      transactionType: 'expense',
      yearCreate: 2022,
    },
  ];

  //   const isLoading = useSelector(transactionsSelectors.getTransactionsIsLoading);

  return (
    <>
      {/* {isLoading && <LinearProgress />} */}
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
          backgroundColor: '#fff',
          marginBottom: '40px',
        }}
      >
        {transactions.map(transaction => (
          <TransactionsItem
            key={transaction._id}
            transaction={transaction}
            deleteDialogHandler={deleteDialogHandler}
          />
        ))}
      </ul>
      <TransactionsButtons />
    </>
  );
}

export default TransactionsList;
