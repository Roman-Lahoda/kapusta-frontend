import { Box, Paper, Tab } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Summary from './Summary';
import InputTransactions from './InputTransactions';
import TransactionsTable from './TransactionsTable';
import incomeCategories from './incomeCategories.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';

function TransactionsTabsHistory({ deleteDialogHandler, transactions }) {
  const [value, setValue] = useState('expense');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.only('desktop'));
  const expenseTransactionList = transactions
    ?.filter(el => el.transactionType === 'expense')
    .reverse();
  const incomeTransactionList = transactions
    ?.filter(el => el.transactionType === 'income')
    .reverse();
  const summaryIncome = useSelector(transactionSelectors.getSummaryIncome);
  const summaryExpense = useSelector(transactionSelectors.getSummaryExpense);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsStyle = {
    '& .MuiButtonBase-root': {
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: '#FAFBFD',
      color: '#000',
      border: 'none',
    },
    '& .MuiTab-root.Mui-selected': {
      backgroundColor: '#FEFEFE',
      color: '#FF751D',
      border: 'none',
    },
  };

  const paperStyle = {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
    p: '30px 20px',
  };

  const tableBox = {};
  if (isDesktop) {
    tableBox.display = 'flex';
  }

  return (
    <Box value={value}>
      <TabContext value={value}>
        <TabList
          TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
          onChange={handleChange}
          sx={tabsStyle}
        >
          <Tab label="Расходы" value="expense" />
          <Tab label="Доходы" value="income" />
        </TabList>
        <Paper sx={paperStyle} value={value}>
          <TabPanel value="expense" sx={{ padding: 0 }}>
            <InputTransactions value={value} />
            <div style={tableBox}>
              <TransactionsTable
                type="expense"
                deleteDialogHandler={deleteDialogHandler}
                transactions={expenseTransactionList}
              />
              <Summary value={summaryExpense} />
            </div>
          </TabPanel>
          <TabPanel value="income" sx={{ padding: 0 }}>
            <InputTransactions
              categories={incomeCategories}
              placeholder="Описание дохода"
              value={value}
            />
            <div style={tableBox}>
              <TransactionsTable
                type="income"
                deleteDialogHandler={deleteDialogHandler}
                transactions={incomeTransactionList}
              />
              <Summary value={summaryIncome} />
            </div>
          </TabPanel>
        </Paper>
      </TabContext>
    </Box>
  );
}

export default TransactionsTabsHistory;
