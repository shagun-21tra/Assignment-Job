import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePrices } from '../features/crypto/cryptoSlice';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector(state => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="overflow-x-auto p-4">
     <table className="min-w-full text-sm text-left border border-gray-300">
  <thead className="bg-gray-200 text-gray-600">
    <tr>
      <th className="border border-gray-300 px-2 py-2">#</th>
      <th className="border border-gray-300 px-2 py-2">Name</th>
      <th className="border border-gray-300 px-2 py-2">Price</th>
      <th className="border border-gray-300 px-2 py-2">1h %</th>
      <th className="border border-gray-300 px-2 py-2">24h %</th>
      <th className="border border-gray-300 px-2 py-2">7d %</th>
      <th className="border border-gray-300 px-2 py-2">Market Cap</th>
      <th className="border border-gray-300 px-2 py-2">Volume(24h)</th>
      <th className="border border-gray-300 px-2 py-2">Supply</th>
      <th className="border border-gray-300 px-2 py-2">7D</th>
    </tr>
  </thead>
  <tbody>
    {assets.map((a, idx) => (
      <tr key={a.id} className="border border-gray-300">
        <td className="border border-gray-300 px-2 py-2">{idx + 1}</td>
        <td className="border border-gray-300 px-2 py-2 flex items-center gap-2">
          <img src={a.logo} alt={a.name} className="w-5 h-5" />
          {a.name} <span className="text-gray-500">{a.symbol}</span>
        </td>
        <td className="border border-gray-300 px-2 py-2">${a.price}</td>
        <td className={`border border-gray-300 px-2 py-2 ${a.change1h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
          {a.change1h}%
        </td>
        <td className={`border border-gray-300 px-2 py-2 ${a.change24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
          {a.change24h}%
        </td>
        <td className="border border-gray-300 px-2 py-2 text-green-600">{a.change7d}%</td>
        <td className="border border-gray-300 px-2 py-2">${a.marketCap.toLocaleString()}</td>
        <td className="border border-gray-300 px-2 py-2">${a.volume24h.toLocaleString()}</td>
        <td className="border border-gray-300 px-2 py-2">{a.supply}</td>
        <td className="border border-gray-300 px-2 py-2">
          <img src={a.chart} alt="7d" className="w-20 h-6" />
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default CryptoTable;
