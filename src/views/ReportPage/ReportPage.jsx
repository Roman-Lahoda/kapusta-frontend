import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionsByMonts } from '../../redux/transactions';
import { getTransactionsSums } from '../../redux/transactions/transactionsSelectors';
import { getCategories } from '../../redux/categories';
import s from './ReportPage.module.scss';
import HeaderReport from '../../components/Reports/HeaderReport/HeaderReport';
import CurrentMonthReport from '../../components/Reports/CurrentMonthReport/CurrentMonthReport';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
// import BarChartReport from '../../components/BarChartReport/BarChartReport';

export default function ReportPage() {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsSums);
  const categories = useSelector(getCategories);

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [type, setType] = useState(false);
  // const [chartsCategoryId, setChartsCategoryId] = useState('');

  useEffect(() => {
    const monthCorrect = month <= 9 ? '0' + month : month;
    const period = `${year}${monthCorrect} `;
    dispatch(getTransactionsByMonts(period));
  }, [dispatch, year, month]);

  const handleChangeMonthRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };

  const handleChangeMonthLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const handleChangeTypeTrans = () => {
    if (type === false) {
      setType(true);
    }
    if (type === true) {
      setType(false);
    }
  };

  // const handleClickGetChart = id => {
  //   setChartsCategoryId(id);
  // };

  const categoriesWithSumms = Object.values(
    transactions.reduce((acc, { group, total_amounts }) => {
      const category = categories.find(i => i._id === group.category);
      if (!acc[category.name]) {
        acc[category.name] = { category, total_amounts: 0 };
      }
      acc[category.name].total_amounts += total_amounts;
      return acc;
    }, {}),
  );

  const filtredTransactions = (transType, categoryId) => {
    return transactions
      .filter(
        transaction =>
          transaction.group.type === transType && transaction.group.category === categoryId,
      )
      .map(tr => {
        return { description: tr.group.description, amount: tr.total_amounts };
      })
      .sort((a, b) => b.amount - a.amount);
  };

  const filtredCategories = transType => {
    return categoriesWithSumms
      .filter(transaction => transaction.category.type === transType)
      .sort((a, b) => b.total_amounts - a.total_amounts);
  };

  return (
    <div className={s.reportContainer}>
      <HeaderSection
        typePage="report"
        month={month}
        year={year}
        handleChangeMonthLeft={handleChangeMonthLeft}
        handleChangeMonthRight={handleChangeMonthRight}
      />
      <HeaderReport transactionsMonth={transactions} />
      <CurrentMonthReport
        typeTrans={type}
        handleChangeTypeTrans={handleChangeTypeTrans}
        transactionsCurrentMonth={transactions}
        handleClickGetChart={handleClickGetChart}
      />

      {/* <BarChartReport
        transactions={filtredTransactions(type, chartsCategoryId)}
        categories={filtredCategories(type)}
        chartsCategoryId={chartsCategoryId}
      /> */}
    </div>
  );
}
