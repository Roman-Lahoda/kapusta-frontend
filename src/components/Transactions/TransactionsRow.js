import { IconButton, TableCell, TableRow, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/transactionIcons/delete.svg';
import React from 'react';

function TransactionsRow({ transaction, deleteDialogHandler }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });

  // const sum = formatter.format(transaction.sum);

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left"></TableCell>
      <TableCell align="left"></TableCell>
      <TableCell align="left"></TableCell>
      <TableCell align="left"></TableCell>
      {/* <TableCell align="left">{transaction.date}</TableCell> */}
      {/* <TableCell align="left">{transaction.description}</TableCell> */}
      {/* <TableCell align="center">{transaction.category}</TableCell> */}
      {/* <TableCell align="center">
        {!transaction.isIncome ? (
          <Typography color="#E7192E" fontWeight="700" fontSize={12}>
            - {sum}
          </Typography>
        ) : (
          <Typography color="#407946" fontWeight="700" fontSize={12}>
            {sum}
          </Typography>
        )}
      </TableCell> */}
      <TableCell align="center" sx={{ width: 110 }}>
        <IconButton
          sx={{ padding: '3px' }}
          aria-label="Удалить транзакцию"
          // onClick={() => deleteDialogHandler(transaction._id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default TransactionsRow;
