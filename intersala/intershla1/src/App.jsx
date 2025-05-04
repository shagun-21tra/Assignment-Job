'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type DataPoint = {
  time: string;
  value: number;
};

type Alert = {
  id: number;
  message: string;
  level: 'green' | 'yellow' | 'red';
  timestamp: string;
};

export default function App() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [status, setStatus] = useState<'green' | 'yellow' | 'red'>('green');
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = parseFloat((Math.random() * 100).toFixed(2));
      const timestamp = new Date().toLocaleTimeString();
      const newPoint = { time: timestamp, value };
      setData((prev) => [...prev.slice(-9), newPoint]);

      if (value < 33) setStatus('green');
      else if (value < 66) setStatus('yellow');
      else setStatus('red');

      if (value > 80) {
        setAlerts((prev) => [
          {
            id: Date.now(),
            message: `High value detected: ${value}`,
            level: 'red',
            timestamp,
          },
          ...prev.slice(0, 4),
        ]);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-400',
    red: 'bg-red-500',
  }[status];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">🚀 Real-Time Dashboard</h1>
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Settings
        </button>
      </nav>

      {/* Landing */}
      <header className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center py-12 px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Real-Time Monitoring Dashboard
        </motion.h2>
        <p className="text-lg">Track metrics live with alerts and visual insights.</p>
      </header>

      {/* Status + Chart */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
        {/* Status Indicator */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">🟢 Live Status</h3>
          <div className="flex items-center gap-4">
            <div className={`w-6 h-6 rounded-full ${statusColor}`} />
            <span className="text-md">System Status: <strong>{status.toUpperCase()}</strong></span>
          </div>
        </div>

        {/* Real-Time Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">📈 Real-Time Chart</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>

      {/* Alerts */}
      <section className="p-6 max-w-6xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">🔔 Recent Alerts</h3>
          {alerts.length === 0 ? (
            <p className="text-gray-500">No alerts yet.</p>
          ) : (
            <ul className="space-y-2">
              {alerts.map((alert) => (
                <li
                  key={alert.id}
                  className={`p-4 rounded-lg text-white ${
                    alert.level === 'red'
                      ? 'bg-red-500'
                      : alert.level === 'yellow'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-green-500'
                  }`}
                >
                  [{alert.timestamp}] {alert.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-center py-4 mt-auto shadow-inner">
        <p>&copy; 2025 RealTimeDash Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
