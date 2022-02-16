import { Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';

import { ReactComponent as CloseIcon } from '../../images/transactionIcons/close.svg';
import React from 'react';
// import { transactionOperation } from '../../redux/transaction/transaction-operation';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';

function DeleteModal({ isOpen = true, transactionId, onClose, transactions }) {
  const dispatch = useDispatch();
  const isNarrowMobile = useMediaQuery('(max-width:435px)');

  // console.log('transactionId', transactionId);
  function submitHandler() {
    // dispatch(transactionOperation.deleteTransaction(idTransaction));
    // console.log('Здесь подключить операцию удаления =>', transactionId);
    dispatch(transactionOperation.deleteTransaction(transactionId));
    onClose();
  }

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ '& .MuiDialog-paper': { borderRadius: '30px' } }}>
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '55px 60px',
          // width: '380px',
          // height: '194px',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '20px',
            top: '20px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography fontWeight={500}>Вы уверены?</Typography>
        <Button
          color="primary"
          variant="contained"
          sx={isNarrowMobile ? { marginTop: '20px' } : { marginTop: '20px', marginRight: '15px' }}
          onClick={() => {
            submitHandler();
          }}
        >
          Да
        </Button>
        <Button color="secondary" variant="contained" sx={{ marginTop: '20px' }} onClick={onClose}>
          Нет
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;
