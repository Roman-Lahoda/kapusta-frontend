import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { transactionsSelectors, transactionsOperations } from '../../../redux/transactions';
import StandartBtn from '../Buttons/StandartBtn/StandartBtn';
import CalendarBar from '../CalendarBar/CalendarBar';
import InputPanel from '../InputPanel/InputPanel';
import Summary from '../Summary/Summary';
import Table from '../Table/Table';
import categoriesExpense from '../../../data/categoryConsumption.json';
import categoriesIncome from '../../../data/categoryIncome.json';
import s from './ContainerTabs.module.css';

const ContainerTabs = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  const [value, onChange] = useState(new Date());

  const date = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const fullDate = `${String(date).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;

  const summaryExpense = useSelector(transactionsSelectors.getAllExpenses);
  const summaryIncome = useSelector(transactionsSelectors.getAllIncome);
  const transactionsByPeriod = useSelector(transactionsSelectors.getTransactionsForPeriod);
  const resultTransactions = Object.values(transactionsByPeriod).flat();
  const expenseTransactions = resultTransactions.filter(item => item.transactionType === 'expense');
  const incomeTransactions = resultTransactions.filter(item => item.transactionType === 'income');

  const sendData = {
    date: fullDate,
    description: description,
    category: category,
    sum: sum,
  };

  const onClick = transType => {
    console.log({ transactioType: transType, ...sendData });
    if (transType === 'income') {
      dispatch(transactionsOperations.income({ transactioType: transType, ...sendData }));
    }
    if (transType === 'expense') {
      dispatch(transactionsOperations.expenses({ transactioType: transType, ...sendData }));
    }
  };

  return (
    <>
      <Tabs className={s.tabsContainer}>
        <TabList className={s.tabList}>
          <Tab className={s.tab} selectedClassName={s.selectedTab}>
            Расход
          </Tab>
          <Tab className={s.tab} selectedClassName={s.selectedTab}>
            Доход
          </Tab>
        </TabList>

        <TabPanel>
          <div className={s.tabPanel}>
            <div className={s.setDataWrapper}>
              <CalendarBar value={value} onChange={onChange} />
              <InputPanel
                description={description}
                setDescription={setDescription}
                category={category}
                setCategory={setCategory}
                sum={sum}
                setSum={setSum}
                categories={categoriesExpense}
              />
              <div className={s.buttonWrapper}>
                <StandartBtn onClick={() => onClick('expense')}>ввод</StandartBtn>
                <StandartBtn>очистить</StandartBtn>
              </div>
            </div>
            <div className={s.wrapper}>
              <Table array={expenseTransactions} transactionType={'expense'} />
              <Summary array={summaryExpense} />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.tabPanel}>
            <div className={s.setDataWrapper}>
              <CalendarBar value={value} onChange={onChange} />
              <InputPanel
                description={description}
                setDescription={setDescription}
                category={category}
                setCategory={setCategory}
                sum={sum}
                setSum={setSum}
                categories={categoriesIncome}
              />
              <div className={s.buttonWrapper}>
                <StandartBtn onClick={() => onClick('income')}>ввод</StandartBtn>
                <StandartBtn>очистить</StandartBtn>
              </div>
            </div>
            <div className={s.wrapper}>
              <Table array={incomeTransactions} transactionType={'income'} />
              <Summary array={summaryIncome} />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ContainerTabs;
