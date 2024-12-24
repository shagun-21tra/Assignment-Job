// import React from 'react';
// import { Link } from 'react-router-dom';

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

// function TripList() {
//     return (
//         <div>
//             <h1>Upcoming Trips</h1>
//             <ul>
//                 {trips.map(trip => (
//                     <li key={trip.id}>
//                         <h2>{trip.name}</h2>
//                         <p>{trip.description}</p>
//                         <p><strong>Dates:</strong> {trip.dates}</p>
//                         <p><strong>Price:</strong> {trip.price}</p>
//                         <p><strong>Slots Available:</strong> {trip.slots}</p>
//                         <Link to={`/trip/${trip.id}`}>View Details</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default TripList;




import React from 'react';
import { Link } from 'react-router-dom';

const trips = [
    { id: 1, name: "Beach Paradise", description: "Sunny beach vacation.", price: "$500" },
    { id: 2, name: "Mountain Adventure", description: "Explore the mountains.", price: "$700" },
];

function TripList() {
    return (
        <div>
            <h1>Upcoming Trips</h1>
            <ul>
                {trips.map((trip) => (
                    <li key={trip.id}>
                        <h2>{trip.name}</h2>
                        <p>{trip.description}</p>
                        <p><strong>Price:</strong> {trip.price}</p>
                        <Link to={`/trip/${trip.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TripList;

