// import React, { useEffect, useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { motion } from "framer-motion";

// type Metric = {
//   name: string;
//   value: number;
//   status: "green" | "yellow" | "red";
// };

// type Alert = {
//   time: string;
//   message: string;
//   status: "green" | "yellow" | "red";
// };

// const getStatusColor = (status: string) => {
//   return status === "green" ? "bg-green-500" : status === "yellow" ? "bg-yellow-500" : "bg-red-500";
// };

// const getStatus = (value: number): "green" | "yellow" | "red" => {
//   if (value < 40) return "green";
//   if (value < 70) return "yellow";
//   return "red";
// };

// const generateMockMetric = (): Metric[] => [
//   { name: "Temperature", value: Math.floor(Math.random() * 100), status: "green" },
//   { name: "Traffic", value: Math.floor(Math.random() * 100), status: "green" },
//   { name: "Visitors", value: Math.floor(Math.random() * 100), status: "green" },
// ];

// const Dashboard = () => {
//   const [metrics, setMetrics] = useState<Metric[]>([]);
//   const [history, setHistory] = useState<any[]>([]);
//   const [alerts, setAlerts] = useState<Alert[]>([]);
//   const [showSettings, setShowSettings] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newMetrics = generateMockMetric().map((m) => ({ ...m, status: getStatus(m.value) }));
//       setMetrics(newMetrics);
//       setHistory((prev) => [
//         ...prev.slice(-20),
//         { time: new Date().toLocaleTimeString(), ...Object.fromEntries(newMetrics.map((m) => [m.name, m.value])) },
//       ]);
//       const newAlerts = newMetrics
//         .filter((m) => m.status === "red")
//         .map((m) => ({
//           time: new Date().toLocaleTimeString(),
//           message: `${m.name} is too high! (${m.value})`,
//           status: "red",
//         }));
//       if (newAlerts.length > 0) setAlerts((prev) => [...newAlerts, ...prev.slice(0, 9)]);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Real-Time Monitoring Dashboard</h1>
//         <button onClick={() => setShowSettings(!showSettings)} className="bg-blue-600 text-white px-4 py-2 rounded">
//           Settings
//         </button>
//       </nav>

//       {/* Modal */}
//       {showSettings && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="fixed top-16 right-4 z-10 bg-white shadow-lg p-6 rounded-xl w-72"
//         >
//           <h2 className="text-lg font-semibold mb-2">Settings</h2>
//           <p className="text-sm">Customize dashboard preferences (not functional in mock).</p>
//           <button onClick={() => setShowSettings(false)} className="mt-4 text-sm text-blue-600 underline">
//             Close
//           </button>
//         </motion.div>
//       )}

//       {/* Landing Section */}
//       <header className="text-center py-10 px-4">
//         <h2 className="text-3xl font-bold mb-2">Monitor Temperature, Traffic & Visitors</h2>
//         <p className="text-gray-600">Live updates, alerts & interactive charts in real-time.</p>
//       </header>

//       {/* Metrics Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 mb-8">
//         {metrics.map((metric, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between"
//           >
//             <div>
//               <h3 className="text-lg font-medium">{metric.name}</h3>
//               <p className="text-2xl font-bold">{metric.value}</p>
//             </div>
//             <span className={`w-4 h-4 rounded-full ${getStatusColor(metric.status)}`}></span>
//           </motion.div>
//         ))}
//       </div>

//       {/* Chart */}
//       <div className="px-4 mb-10">
//         <h3 className="text-xl font-semibold mb-2">Live Data Trends</h3>
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={history}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="Temperature" stroke="#EF4444" />
//               <Line type="monotone" dataKey="Traffic" stroke="#3B82F6" />
//               <Line type="monotone" dataKey="Visitors" stroke="#10B981" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Alerts */}
//       <div className="px-4 mb-10">
//         <h3 className="text-xl font-semibold mb-2">Recent Alerts</h3>
//         <div className="bg-white p-4 rounded-xl shadow-md space-y-2 max-h-64 overflow-y-auto">
//           {alerts.length === 0 ? (
//             <p className="text-gray-500">No alerts yet.</p>
//           ) : (
//             alerts.map((alert, i) => (
//               <div key={i} className="flex items-center space-x-2 text-sm">
//                 <span className={`w-3 h-3 rounded-full ${getStatusColor(alert.status)}`}></span>
//                 <span className="font-medium">{alert.time}</span>
//                 <span>{alert.message}</span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white mt-auto p-4 text-center text-sm text-gray-500">
//         © 2025 Real-Time Dashboard by YourName. Built with Next.js, TypeScript, Tailwind.
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
