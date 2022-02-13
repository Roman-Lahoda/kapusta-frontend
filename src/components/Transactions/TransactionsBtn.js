import { Button, ButtonGroup } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react';

const buttonGroupStyles = {
  boxShadow: 'none',
  position: 'fixed',
  bottom: 0,
  '& .MuiButtonGroup-grouped': {
    borderRadius: 0,
    borderTop: 'none',
  },
  '& .MuiButtonGroup-grouped:first-of-type': {
    marginRight: '2px',
  },
  '& .MuiButton-root': { color: '#000' },
  '& .MuiButton-root:hover': { backgroundColor: '#FF751D', color: '#fff' },
};

function TransactionsButtons() {
  return (
    <>
      <ButtonGroup color="secondary" variant="contained" fullWidth sx={buttonGroupStyles}>
        <Button component={NavLink} to="/incomeform">
          Доходы
        </Button>
        <Button component={NavLink} to="/expenseform">
          Расходы
        </Button>
      </ButtonGroup>
    </>
  );
}

export default TransactionsButtons;
