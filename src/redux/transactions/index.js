export * as transactionsOperations from './transactions-operations';
export * as transactionsReducer from './transactions-slice';
export { default as transactionsSelectors } from './transactions-selectors';

// ДЛЯ ТЕСТИНГА
// import { transactionsOperations } from "../../redux/transactions"
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";


// export default function ReportView() {
//   const dispatch = useDispatch();
// const date = '01.11.2021'
// const description = 'lorem'
// const category = "Транспорт"
//   const sum = 4000
//   const transactionType = 'income'
//   const period = '11.2021'

//   const transactionId = '61c1047581b14aeea5eada1d'
  
//   // {
//   //   "transactionType": "income", 'expense'
//   //   "date": "10.10.2021",
//   //   "category": "ЗП",
//   //   "sum": 0
//   // }

// useEffect(() => {
//   dispatch(transactionsOperations.getSummary({ date, transactionType }))
// }, [dispatch])

