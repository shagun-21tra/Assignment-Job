// // import React from 'react';
// // import { useParams } from 'react-router-dom';

// // const trips = [
// //     {
// //         id: 1,
// //         name: "Beach Paradise",
// //         description: "Enjoy a sunny beach vacation.",
// //         dates: "Jan 10 - Jan 20",
// //         price: "$500",
// //         slots: 10,
// //         cancellationPolicy: "Full refund 7 days before departure."
// //     },
// //     {
// //         id: 2,
// //         name: "Mountain Adventure",
// //         description: "Explore the mountains.",
// //         dates: "Feb 15 - Feb 25",
// //         price: "$700",
// //         slots: 5,
// //         cancellationPolicy: "Full refund 14 days before departure."
// //     }
// // ];

// // function TripDetails() {
// //     const { id } = useParams();
// //     const trip = trips.find(trip => trip.id === parseInt(id));

// //     if (!trip) {
// //         return <p>Trip not found.</p>;
// //     }

// //     return (
// //         <div>
// //             <h1>{trip.name}</h1>
// //             <p>{trip.description}</p>
// //             <p><strong>Dates:</strong> {trip.dates}</p>
// //             <p><strong>Price:</strong> {trip.price}</p>
// //             <p><strong>Slots Available:</strong> {trip.slots}</p>
// //             <p><strong>Cancellation Policy:</strong> {trip.cancellationPolicy}</p>
// //             <button>Add to Cart</button>
// //         </div>
// //     );
// // }

// // export default TripDetails;




// import React, { useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';

// const trips = [
//     {
//         id: 1,
//         name: "Beach Paradise",
//         description: "Enjoy a sunny beach vacation.",
//         dates: "Jan 10 - Jan 20",
//         price: "$500",
//         slots: 10,
//         cancellationPolicy: "Full refund 7 days before departure."
//     },
//     {
//         id: 2,
//         name: "Mountain Adventure",
//         description: "Explore the mountains.",
//         dates: "Feb 15 - Feb 25",
//         price: "$700",
//         slots: 5,
//         cancellationPolicy: "Full refund 14 days before departure."
//     }
// ];

// function TripDetails() {
//     const { id } = useParams();
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const trip = trips.find(trip => trip.id === parseInt(id));

//     if (!trip) {
//         return <p>Trip not found.</p>;
//     }

//     const handleBooking = () => {
//         if (!user) {
//             navigate('/login');
//         } else {
//             alert('Trip added to cart!');
//         }
//     };

//     return (
//         <div>
//             <h1>{trip.name}</h1>
//             <p>{trip.description}</p>
//             <p><strong>Dates:</strong> {trip.dates}</p>
//             <p><strong>Price:</strong> {trip.price}</p>
//             <p><strong>Slots Available:</strong> {trip.slots}</p>
//             <p><strong>Cancellation Policy:</strong> {trip.cancellationPolicy}</p>
//             <button onClick={handleBooking}>Book Now</button>
//         </div>
//     );
// }

// export default TripDetails;





import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

const trips = [
    { id: 1, name: "Beach Paradise", description: "Sunny beach vacation.", price: "$500", slots: 10 },
    { id: 2, name: "Mountain Adventure", description: "Explore the mountains.", price: "$700", slots: 5 },
];

function TripDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const trip = trips.find((trip) => trip.id === parseInt(id));

    if (!trip) return <p>Trip not found.</p>;

    return (
        <div>
            <h1>{trip.name}</h1>
            <p>{trip.description}</p>
            <p><strong>Price:</strong> {trip.price}</p>
            <p><strong>Slots Available:</strong> {trip.slots}</p>
            <button onClick={() => addToCart(trip)}>Add to Cart</button>
        </div>
    );
}

export default TripDetails;
