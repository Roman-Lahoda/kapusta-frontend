import { IconButton, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/transactionIcons/delete.svg';
import React from 'react';

function TransactionsItem({ transaction, deleteDialogHandler }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });
  const sum = formatter.format(transaction.sum);

  // const transactions = [
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 14,
  //     description: 'rbndndfn',
  //     idT: 111111111111,
  //     monthCreate: 2,
  //     sum: '5000',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  //   {
  //     category: 'Транспорт',
  //     dayCreate: 14,
  //     description: 'rbndndfn',
  //     idT: 2222222222,
  //     monthCreate: 2,
  //     sum: '10000',
  //     transactionType: 'income',
  //     yearCreate: 2022,
  //   },
  // ];
  // console.log(transaction.transactionType);
  const isIncome = transaction.transactionType === 'income';
  const date = `${transaction.dayCreate}.${transaction.monthCreate}.${transaction.yearCreate}`;
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
            {date}
          </Typography>
        </div>
        <div style={{ minWidth: '10%', flexShrink: 1, alignSelf: 'flex-end' }}>
          <Typography variant="body1" fontSize={8}>
            {transaction.category}
          </Typography>
        </div>
        <div style={{ width: '36%', textAlign: 'right' }}>
          {!isIncome ? (
            <Typography fontSize={14} color="#E7192E" fontWeight="700">
              -{sum}
            </Typography>
          ) : (
            <Typography fontSize={14} color="#407946" fontWeight="700">
              {sum}
            </Typography>
          )}
        </div>
        <div style={{ width: '10%', textAlign: 'center' }}>
          <IconButton
            onClick={() => {
              deleteDialogHandler(transaction.iTd);
              console.log(transaction.idT);
            }}
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
