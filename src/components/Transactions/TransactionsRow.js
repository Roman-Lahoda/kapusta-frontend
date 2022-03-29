import { IconButton, TableCell, TableRow, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/transactionIcons/delete.svg';
import React from 'react';
import { EXPENSES } from '../../constants/constants';
import { INCOMES } from '../../constants/constants';
import { format } from 'date-fns';
import EllipsisText from 'react-ellipsis-text';

function TransactionsRow({ transaction, deleteDialogHandler }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });

  const trueCategoryEx = EXPENSES.category.find(el => el.value === transaction.category)?.label;
  const trueCategoryIn = INCOMES.category.find(el => el.value === transaction.category)?.label;

  const sum = formatter.format(transaction.sum);

  // const date = `${transaction.dayCreate}.${transaction.monthCreate}.${transaction.yearCreate}`;
  const date = format(transaction.dateOfTransaction, 'dd.MM.yyyy');
  const isIncome = transaction.transactionType === 'income';

  // console.log(transaction?.description);
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">{date}</TableCell>
      <TableCell align="left">
        {/* {transaction.description} */}
        <EllipsisText text={`${transaction?.description}`} length={25} />
      </TableCell>
      <TableCell align="center">{trueCategoryEx || trueCategoryIn}</TableCell>
      <TableCell align="center">
        {!isIncome ? (
          <Typography color="#E7192E" fontWeight="700" fontSize={12}>
            - {sum}
          </Typography>
        ) : (
          <Typography color="#407946" fontWeight="700" fontSize={12}>
            {sum}
          </Typography>
        )}
      </TableCell>

      <TableCell align="center" sx={{ width: 110 }}>
        <IconButton
          sx={{ padding: '3px' }}
          aria-label="Удалить транзакцию"
          onClick={() => {
            // console.log('click on delete button');
            deleteDialogHandler(transaction);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default TransactionsRow;
