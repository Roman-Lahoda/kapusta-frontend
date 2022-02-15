import { Box, Paper, Tab } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Summary from './Summary';
import Transactions from './Transactions';
import TransactionsTable from './TransactionsTable';
import incomeCategories from './incomeCategories.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function TransactionsTabs({ deleteDialogHandler }) {
  const [value, setValue] = useState('expense');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.only('desktop'));
  // console.log(
  //   '🚀 ~ file: TransactionsTabsHistory.js ~ line 16 ~ TransactionsTabs ~ isDesktop',
  //   isDesktop,
  // );

  // console.log(value);
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
            <Transactions value={value} />
            <div style={tableBox}>
              <TransactionsTable type="expense" deleteDialogHandler={deleteDialogHandler} />
              <Summary value={value} />
            </div>
          </TabPanel>
          <TabPanel value="income" sx={{ padding: 0 }}>
            <Transactions
              isIncome={true}
              categories={incomeCategories}
              placeholder="Описание дохода"
              value={value}
            />
            <div style={tableBox}>
              <TransactionsTable type="income" deleteDialogHandler={deleteDialogHandler} />
              <Summary value={value} />
            </div>
          </TabPanel>
        </Paper>
      </TabContext>
    </Box>
  );
}

export default TransactionsTabs;
