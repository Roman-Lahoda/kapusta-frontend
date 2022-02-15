import { IconButton, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/transactionIcons/delete.svg';
import React from 'react';

function TransactionsItem({ transaction, deleteDialogHandler }) {
  // const formatter = new Intl.NumberFormat('uk-UA', {
  //   style: 'currency',
  //   currency: 'UAH',
  // });
  // const sum = formatter.format(transaction.sum);

  console.log(transaction);

  return (
    <li
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: '1px solid #F5F6FB',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', flexGrow: 1 }}>
          <Typography variant="body1" fontWeight={700}>
            {transaction.description}
          </Typography>
          <Typography variant="body1" fontSize={8}>
            {transaction.date}
          </Typography>
        </div>
        <div style={{ minWidth: '10%', flexShrink: 1, alignSelf: 'flex-end' }}>
          <Typography variant="body1" fontSize={8}>
            {transaction.category}
          </Typography>
        </div>
        <div style={{ width: '36%', textAlign: 'right' }}>
          {!transaction.isIncome ? (
            <Typography fontSize={14} color="#E7192E" fontWeight="700">
              - {sum}
            </Typography>
          ) : (
            <Typography fontSize={14} color="#407946" fontWeight="700">
              {sum}
            </Typography>
          )}
        </div>
        <div style={{ width: '10%', textAlign: 'center' }}>
          <IconButton
            onClick={() => deleteDialogHandler(transaction.iTd)}
            aria-label="Удалить транзакцию"
            sx={{ p: '6px' }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </li>
  );
}

export default TransactionsItem;
