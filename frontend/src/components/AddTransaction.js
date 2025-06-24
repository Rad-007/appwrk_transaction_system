import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTransaction } from '../api';

function AddTransaction() {
  const [type, setType] = useState('Credit');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();

  const save = async () => {
    if (!amount || !description) {
      alert("Amount and Description are required.");
      return;
    }
    await postTransaction({ type, amount, description, date });
    navigate('/');
  };

  const cancel = () => navigate('/');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ width: '500px', border: '1px solid #ccc', borderRadius: '5px', padding: '30px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2>New Transaction</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Transaction Type</label>
          <select value={type} onChange={e => setType(e.target.value)} style={{ width: '100%', padding: '10px' }}>
            <option>Credit</option>
            <option>Debit</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            rows="3"
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <button onClick={save} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', marginRight: '10px', border: 'none', borderRadius: '4px' }}>💾 Save</button>
          <button onClick={cancel} style={{ backgroundColor: '#f5f5f5', color: '#333', padding: '10px 20px', border: '1px solid #ccc', borderRadius: '4px' }}>✖ Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;