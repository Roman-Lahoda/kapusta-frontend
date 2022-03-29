import { Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';

import { ReactComponent as CloseIcon } from '../../images/transactionIcons/close.svg';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import transactionOperation from '../../reduxV2/transaction/transaction-operation';

function DeleteModal({ isOpen = false, transaction, onClose, transactions }) {
  console.log('🚀 ~ file: ModalForDelete.js ~ line 11 ~ DeleteModal ~ isOpen', isOpen);
  // if (isOpen) {
  // console.log(
  //   '🚀 ~ file: ModalForDelete.js ~ line 11 ~ DeleteModal ~ transaction.idT',
  //   transaction?.idT,
  // );
  // }
  // console.log('test');
  const dispatch = useDispatch();
  const isNarrowMobile = useMediaQuery('(max-width:435px)');

  async function submitHandler() {
    // console.log('in submitHandler transaction', transaction?.idT);
    if (isOpen) {
      await dispatch(transactionOperation.deleteTransaction(transaction));
      window.removeEventListener('keydown', keydown);
      onClose();
    }
  }

  useEffect(() => {
    // console.log('test in useefect');
    if (isOpen) {
      // console.log('test add ev list');
      window.removeEventListener('keydown', keydown);
      window.addEventListener('keydown', keydown);
    }
  }, [isOpen, transaction]);

  function keydown(e) {
    // console.log('test in keydown');
    if (isOpen) {
      if (e.code === 'Escape') {
        // console.log('test remove in keydown');
        window.removeEventListener('keydown', keydown);
        // onClose();
      } else if (e.code === 'Enter') {
        // console.log('in keydown transaction idT', transaction?.idT);
        // console.log('delete tr in modal');
        submitHandler();
        // window.removeEventListener('keydown', keydown);
        // dispatch(transactionOperation.deleteTransaction(transaction));
        // onClose();
      } else {
        return;
      }
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose();
        // console.log('test close modal 1');
        window.removeEventListener('keydown', keydown);
      }}
      sx={{ '& .MuiDialog-paper': { borderRadius: '30px' } }}
    >
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '59px 60px',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => {
            window.removeEventListener('keydown', keydown);
            // console.log('test close modal 2');
            onClose();
          }}
          sx={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            root: {
              '&:hover': {
                backgroundColor: '#ffdac0',
                borderRadius: '50%',
                transition: '0.5s linear',
              },
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography fontWeight={500} fontSize={14}>
          Вы уверены?
        </Typography>
        <Button
          color="primary"
          variant="contained"
          sx={
            isNarrowMobile
              ? { marginTop: '20px', height: '44px', width: '125px' }
              : { marginTop: '20px', marginRight: '15px', height: '44px', width: '125px' }
          }
          onClick={() => {
            submitHandler();
            // window.removeEventListener('keydown', keydown);
          }}
        >
          Да
        </Button>
        <Button
          color="secondary"
          variant="contained"
          sx={{ marginTop: '20px', height: '44px', width: '125px' }}
          onClick={() => {
            window.removeEventListener('keydown', keydown);
            onClose();
          }}
        >
          Нет
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;
