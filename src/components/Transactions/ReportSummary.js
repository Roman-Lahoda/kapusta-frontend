import React from 'react';
import { Typography, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const formatterForSummary = summary => {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });

  return formatter.format(summary);
};

const paperStyles = {
  maxWidth: '1060px',
  padding: '5px 0',
  borderRadius: '30px',
  borderShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
  backgroundColor: '#FFFFFF',
};

const paperStyles1 = {
  maxWidth: '300px',
  padding: '5px 0',
  margin: '0 auto',
  borderRadius: '30px',
  borderShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
  backgroundColor: '#FFFFFF',
};

const ReportSummary = ({ transactions }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  const { income, expense } = transactions;
  const incomeForMonth = Object.entries(income).reduce((totalSum, el) => totalSum + el[1].total, 0);
  const expensesForMonth = Object.entries(expense).reduce(
    (totalSum, el) => totalSum + el[1].total,
    0,
  );

  return (
    <>
      {isMobile ? (
        <Paper sx={paperStyles1}>
          <Typography variant="h2" color="#52555F">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    padding: '20px 10px 20px 10px',
                    borderRight: '1px solid #E0E5EB',
                    textAlign: 'center',
                  }}
                >
                  Расходы:
                  <span
                    style={{
                      display: 'inline-block',
                      paddingLeft: '5px',
                      color: '#E7192E',
                      marginTop: '5px',
                    }}
                  >
                    {expensesForMonth > 0
                      ? `- ${formatterForSummary(expensesForMonth)}`
                      : formatterForSummary(0)}
                  </span>
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    padding: '20px 10px 20px 10px',
                    textAlign: 'center',
                  }}
                >
                  Доходы:
                  <span
                    style={{
                      display: 'inline-block',
                      paddingLeft: '5px',
                      marginTop: '5px',
                      color: '#407946',
                    }}
                  >
                    {incomeForMonth > 0
                      ? `+ ${formatterForSummary(incomeForMonth)}`
                      : formatterForSummary(0)}
                  </span>
                </p>
              </div>
            </div>
          </Typography>
        </Paper>
      ) : (
        <Paper sx={paperStyles}>
          <Typography variant="h2" color="#52555F">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  padding: '15px 20px 15px 0',
                  borderRight: '1px solid #E0E5EB',
                }}
              >
                Расходы:
                <span
                  style={{
                    display: 'inline-block',
                    paddingLeft: '15px',
                    color: '#E7192E',
                  }}
                >
                  {expensesForMonth > 0
                    ? `- ${formatterForSummary(expensesForMonth)}`
                    : formatterForSummary(0)}
                </span>
              </p>
              <p style={{ padding: '15px 0 15px 20px' }}>
                Доходы:
                <span
                  style={{
                    display: 'inline-block',
                    paddingLeft: '15px',
                    color: '#407946',
                  }}
                >
                  {incomeForMonth > 0
                    ? `+ ${formatterForSummary(incomeForMonth)}`
                    : formatterForSummary(0)}
                </span>
              </p>
            </div>
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default ReportSummary;
