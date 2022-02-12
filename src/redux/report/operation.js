// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://capusta2.herokuapp.com/api';

// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDUzZWQ3ZDNlMmJkMWFmYTc0M2Y5ZSIsImlhdCI6MTY0NDU3MzU5OCwiZXhwIjoxNjQ0NjAyMzk4fQ.CgjSbL4-2ucHNxsKVzGMoL3AlKyf2nHKb-tXMgKPLyA';

// // export const getTransactionsByPeriod = (month_number, year_number) =>
// //   axios.get(`/transactions/month?month=${month_number}&year=${year_number}`);

// // getTransactionsByPeriod(2, 2022).then(res => console.log(res));

// export const getTransactionsByPeriod = createAsyncThunk(
//   'transaction/expense',
//   async (month_number, year_number) => {
//     const data = await axios.get(`/transactions/month?month=${month_number}&year=${year_number}`);
//     return data;
//   },
// );
