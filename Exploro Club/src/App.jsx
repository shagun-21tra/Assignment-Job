// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import TripList from './components/TripList';
// // // import TripDetails from './components/TripDetails';
// // // import Cart from './components/Cart';
// // // import Checkout from './components/Checkout';
// // // import Login from './components/Login';
// // // import Navbar from './components/Navbar';

// // // function App() {
// // //     return (
// // //         <Router>
// // //             <Navbar />
// // //             <Routes>
// // //                 <Route path="/" element={<TripList />} />
// // //                 <Route path="/trip/:id" element={<TripDetails />} />
// // //                 <Route path="/cart" element={<Cart />} />
// // //                 <Route path="/checkout" element={<Checkout />} />
// // //                 <Route path="/login" element={<Login />} />
// // //             </Routes>
// // //         </Router>
// // //     );
// // // }

// // // export default App;



// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import TripList from './components/TripList';
// // import TripDetails from './components/TripDetails';
// // import Cart from './components/Cart';
// // import Checkout from './components/Checkout';
// // import Login from './components/Login';
// // import Signup from './components/Signup';
// // import OrganizerDashboard from './components/OrganizerDashboard';
// // import Navbar from './components/Navbar';
// // import AuthProvider from './context/AuthProvider';

// // function App() {
// //     return (
// //         <AuthProvider>
// //             <Router>
// //                 <Navbar />
// //                 <Routes>
// //                     <Route path="/" element={<TripList />} />
// //                     <Route path="/trip/:id" element={<TripDetails />} />
// //                     <Route path="/cart" element={<Cart />} />
// //                     <Route path="/checkout" element={<Checkout />} />
// //                     <Route path="/login" element={<Login />} />
// //                     <Route path="/signup" element={<Signup />} />
// //                     <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
                    
// // <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
 
// //                 </Routes>
// //             </Router>
// //         </AuthProvider>
// //     );
// // }

// // export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import TripList from './components/TripList'
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Navbar from './components/Navbar'; import Dashboard from './components/Dashboard';
// import AuthProvider from './context/AuthProvider';
// import Cart from './components/Cart';
// import CartProvider from './context/CartProvider';
// function App() {
//     return (
//         <AuthProvider>
//              <CartProvider>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<TripList />} />  
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/cart" element={<Cart />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Routes>
//             </Router>
//             </CartProvider>
//         </AuthProvider>
//     );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TripList from './components/TripList';
import TripDetails from './components/TripDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AuthProvider from './context/AuthProvider';
import CartProvider from './context/CartProvider';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<TripList />} />
                        <Route path="/trip/:id" element={<TripDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
