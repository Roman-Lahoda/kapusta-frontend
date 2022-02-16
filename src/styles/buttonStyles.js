const buttonStyles = {
  styleOverrides: {
    root: {
      padding: 12,
      borderRadius: 16,
      minWidth: 125,
    },
  },
  variants: [
    {
      props: { color: 'secondary' },
      style: {
        backgroundColor: '#F5F6FB',
        boxShadow: '1px 2px 5px rgba(170, 178, 197, 0.4)',
        color: '#52555F',
      },
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        border: `2px solid #F6F7FC`,
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
    },
    {
      props: { variant: 'outlined', color: 'info' },
      style: {
        border: `2px solid #FFFFFF`,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: 'rgba(82, 85, 95, 0.7)',
        fontWeight: '400',
      },
    },
  ],
};
export default buttonStyles;
