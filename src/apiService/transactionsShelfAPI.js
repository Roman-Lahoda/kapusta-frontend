import axios from 'axios';

export async function fetchSummary(type, date) {
    const { data } = await axios.get(`/transaction/summary/${type}/${date}`);
    return data;
}

export async function fetchSummaryByCategory(type, date) {
    const { data } = await axios.get(`/transaction/categories/${type}/${date}`)
    return data;
}

export async function fetchTransForPeriod(type, period) {
    const { data } = await axios.get(`/transaction/${type}/${period}`)
    return data;
} 
export async function patchIncome({transactionType, date, description, category, sum}) {
    const { data } = await axios.patch('/transaction/income', {
        transactionType,
        date,
        description,
        category,
        sum,
    });
    return data.data.result;
}

export async function patchExpenses({transactionType,date, description, category, sum}) {
    const { data } = await axios.patch('/transaction/expenses', {
        transactionType,
        date,
        description,
        category,
        sum,
    });
    return data.data.result;
}

export async function deleteTransaction(transactionId) {
    return await axios.delete(`/transaction/${transactionId}`);
}
