import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../api';
import { Link } from 'react-router-dom';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await fetchTransactions();
    setTransactions(res.data);
  };

  return (
    <div>
      <h2>Office Transactions</h2>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Link to="/add">
          <button style={{ padding: '8px 16px', fontWeight: 'bold', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            + Add Transaction
          </button>
        </Link>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Credit</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Debit</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{tx.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{tx.description}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{tx.credit || ''}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{tx.debit || ''}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{tx.running_balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;