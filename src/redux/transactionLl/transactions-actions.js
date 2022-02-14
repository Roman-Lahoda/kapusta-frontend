import { createAction } from '@reduxjs/toolkit';

export const resetError = createAction('transactions/resetError');
export const selectedDate = createAction('transaction/selectedDate')