const tableStyles = {
  MuiTableContainer: {
    styleOverrides: {
      root: {
        boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        backgroundColor: '#fff',
        color: '#000',
        border: '2px solid #F5F6FB',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        padding: 10,
        paddingLeft: 20,
      },
      head: {
        backgroundColor: '#F5F6FB',
        color: '#000',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        height: 40,
        borderBottom: '2px solid #F5F6FB',
      },
    },
  },
};

export default tableStyles;
