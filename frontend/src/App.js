// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        {/* <nav>
          <Link to="/">Transactions</Link> | <Link to="/add">+ Add Transaction</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/add" element={<AddTransaction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;