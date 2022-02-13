import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import EmptyRow from './EmptyRow';
import React from 'react';
import TransactionsRow from './TransactionsRow';
//   import { transactionsSelectors } from '../../redux/transaction';
//   import { useSelector } from 'react-redux';

function TransactionsTable({ type, deleteDialogHandler }) {
  // const selectorType =
  //   type === 'expense'
  //     ? transactionsSelectors.getExpenseTransactions
  //     : transactionsSelectors.getIncomeTransactions;

  // const transactions = useSelector(selectorType);

  // const isLoading = useSelector(transactionsSelectors.getTransactionsIsLoading);

  return (
    <>
      {/* {isLoading && <LinearProgress />} */}
      <TableContainer
        component={Paper}
        sx={{
          height: '437px',
          maxWidth: '760px',
          marginBottom: '40px',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography variant="button">Дата</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="button">Описание</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="button">Категория</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="button">Сумма</Typography>
              </TableCell>
              <TableCell align="center" sx={{ width: 110 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {transactions.map(transaction => (
              <TransactionsRow
                key={transaction._id}
                transaction={transaction}
                deleteDialogHandler={deleteDialogHandler}
              />
            ))}
            {transactions.length < 9 &&
              Array(9 - transactions.length)
                .fill()
                .map((item, index) => <EmptyRow key={index}></EmptyRow>)} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionsTable;
