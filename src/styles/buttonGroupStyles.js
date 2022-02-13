const buttonGroupStyles = {
  boxShadow: 'none',
  '& .MuiButtonGroup-grouped': {
    borderRadius: '16px',
    width: '125px',
    height: '44px',
  },
  '& .MuiButtonGroup-grouped:first-of-type': {
    marginRight: '15px',
    borderRight: '2px solid #F5F6FB',
    borderTopRightRadius: '16px',
    borderBottomRightRadius: '16px',
  },
  '& .MuiButtonGroup-grouped:last-of-type': {
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
  },
  '& .MuiButton-root': { color: '#52555F' },
  '& .MuiButton-root:hover': { backgroundColor: '#FF751D', color: '#fff' },
};
export { buttonGroupStyles };
