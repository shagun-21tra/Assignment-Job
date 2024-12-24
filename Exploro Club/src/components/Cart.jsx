// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartProvider';

// function Cart() {
//     const { cart, removeFromCart, clearCart } = useContext(CartContext);

//     if (cart.length === 0) return <p>Your cart is empty.</p>;

//     return (
//         <div>
//             <h1>Your Cart</h1>
//             <ul>
//                 {cart.map((trip) => (
//                     <li key={trip.id}>
//                         <h2>{trip.name}</h2>
//                         <p>{trip.description}</p>
//                         <p><strong>Price:</strong> {trip.price}</p>
//                         <button onClick={() => removeFromCart(trip.id)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={clearCart}>Clear Cart</button>
//         </div>
//     );
// }

// export default Cart;




import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    if (cart.length === 0) return <p>Your cart is empty.</p>;

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cart.map((trip) => (
                    <li key={trip.id}>
                        <h2>{trip.name}</h2>
                        <p>{trip.description}</p>
                        <button onClick={() => removeFromCart(trip.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
}

export default Cart;
