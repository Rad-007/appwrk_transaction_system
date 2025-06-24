import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchTransactions = () => axios.get(`${API_BASE}/transactions`);
export const postTransaction = (tx) => axios.post(`${API_BASE}/transactions`, tx);