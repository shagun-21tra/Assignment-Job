// import { createContext, useState } from 'react';

// export const CartContext = createContext();

// function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);

//     const addToCart = (trip) => setCart([...cart, trip]);
//     const removeFromCart = (id) => setCart(cart.filter(trip => trip.id !== id));
//     const clearCart = () => setCart([]);

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export default CartProvider;



import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (trip) => setCart([...cart, trip]);
    const removeFromCart = (id) => setCart(cart.filter((trip) => trip.id !== id));
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
