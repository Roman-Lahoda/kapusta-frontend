// import { useEffect } from 'react';
// import sprite from '../../images/logOutSprite.svg';
import { useEffect } from 'react';
import { ReactComponent as CloseIcon } from '../../images/transactionIcons/close.svg';
// import s from './UniversalModal.module.scss';

// import { useDispatch } from 'react-redux';
import { Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// function UniversalModal({ text, onClickYes, onClose, active }) {
//   return (
//     // <div className={s.backdrop}>
//     <div className={active ? `${s.modal} ${s.open}` : `${s.modalNone}`}>
//       <button type="button" className={s.closeBtn} onClick={onClose}>
//         {/* <svg className={s.close}> */}
//         {/* <use href={`${sprite}#icon-cross`} /> */}
//         <CloseIcon width="12" height="12" />
//         {/* </svg> */}
//       </button>

//       <p className={s.text}>{text}</p>

//       <ul className={s.list}>
//         <li className={s.item}>
//           <button type="button" className={`${s.button} ${s.buttonYes}`} onClick={onClickYes}>
//             Да
//           </button>
//         </li>
//         <li>
//           <button type="button" className={`${s.button} ${s.buttonNo}`} onClick={onClose}>
//             Нет
//           </button>
//         </li>
//       </ul>
//     </div>
//     // </div>
//   );
// }

function UniversalModal({ text, onClickYes, onClose, isOpen }) {
  // const dispatch = useDispatch();
  const isNarrowMobile = useMediaQuery('(max-width:435px)');

  useEffect(() => {
    if (isOpen) {
      // console.log('test add ev list');
      // window.removeEventListener('keyup', keyup);
      window.addEventListener('keyup', keyup);
    }
  }, [isOpen]);

  function keyup(e) {
    // console.log('test');
    if (e.code === 'Escape') {
      onClose();
      window.removeEventListener('keyup', keyup);
    } else if (e.code === 'Enter') {
      // console.log('in keydown transaction idT', transaction?.idT);
      onClickYes();
      window.removeEventListener('keyup', keyup);
      // dispatch(transactionOperation.deleteTransaction(transaction));
      // onClose();
    } else {
      return;
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ '& .MuiDialog-paper': { borderRadius: '30px' } }}>
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '59px 60px',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
            // window.removeEventListener('keyup', keyup);
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
          {text}
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
            onClickYes();
            // window.removeEventListener('keyup', keyup);
          }}
        >
          Да
        </Button>
        <Button
          color="secondary"
          variant="contained"
          sx={{ marginTop: '20px', height: '44px', width: '125px' }}
          onClick={() => {
            onClose();
            // window.removeEventListener('keyup', keyup);
          }}
        >
          Нет
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default UniversalModal;
