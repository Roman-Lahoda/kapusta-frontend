import { IconButton, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/transactionIcons/delete.svg';
import React from 'react';
import { EXPENSES } from '../../constants/constants';
import { INCOMES } from '../../constants/constants';

function TransactionsItem({ transaction, deleteDialogHandler }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });
  const sum = formatter.format(transaction.sum);
  const trueCategoryEx = EXPENSES.category.find(el => el.value === transaction.category)?.label;
  const trueCategoryIn = INCOMES.category.find(el => el.value === transaction.category)?.label;

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
          <Typography variant="body1" fontWeight={700} fontSize={12} paddingLeft={'15px'}>
            {transaction.description}
          </Typography>
          <Typography variant="body1" fontSize={8} paddingLeft={'15px'}>
            {date}
          </Typography>
        </div>
        <div style={{ minWidth: '20%', flexShrink: 1, alignSelf: 'center' }}>
          <Typography variant="body1" fontSize={8}>
            {trueCategoryEx || trueCategoryIn}
          </Typography>
        </div>
        <div style={{ width: '30%', textAlign: 'right', padding: '5px' }}>
          {!isIncome ? (
            <Typography fontSize={12} color="#E7192E" fontWeight="700">
              -{sum}
            </Typography>
          ) : (
            <Typography fontSize={12} color="#407946" fontWeight="700">
              {sum}
            </Typography>
          )}
        </div>
        <div style={{ width: '20%', textAlign: 'right' }}>
          <IconButton
            onClick={() => {
              deleteDialogHandler(transaction.idT);
            }}
            aria-label="Удалить транзакцию"
            sx={{ p: '6px', right: '15px' }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </li>
  );
}

export default TransactionsItem;
