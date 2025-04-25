import React from 'react';
import CryptoTable from './components/CryptoTable';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-center p-4">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
