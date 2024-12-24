import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

function CustomerDashboard() {
    const [bookedTrips, setBookedTrips] = useState([
        { id: 1, name: "Beach Paradise", dates: "Jan 10 - Jan 20", status: "Confirmed" },
        { id: 2, name: "Mountain Adventure", dates: "Feb 15 - Feb 25", status: "Pending" },
    ]);

    const cancelBooking = (id) => {
        const today = new Date();
        const refund = calculateRefund(id, today);
        setBookedTrips(bookedTrips.filter(trip => trip.id !== id));
        alert(`Booking canceled! Refund: ${refund}`);
    };

    const calculateRefund = (tripId, today) => {
        // Dummy refund calculation logic
        return "Full Refund (15 days before)";
    };

    return (
        <div>
            <h2>My Bookings</h2>
            <ul>
                {bookedTrips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>Dates: {trip.dates}</p>
                        <p>Status: {trip.status}</p>
                        <button onClick={() => cancelBooking(trip.id)}>Cancel Booking</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function OrganizerDashboard() {
    const [trips, setTrips] = useState([]);
    const [newTrip, setNewTrip] = useState({ name: '', dates: '', slots: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTrip({ ...newTrip, [name]: value });
    };

    const addTrip = () => {
        setTrips([...trips, { ...newTrip, id: trips.length + 1 }]);
        setNewTrip({ name: '', dates: '', slots: '' });
    };

    const deleteTrip = (id) => {
        setTrips(trips.filter(trip => trip.id !== id));
    };

    return (
        <div>
            <h2>Manage Trips</h2>
            <input name="name" placeholder="Trip Name" value={newTrip.name} onChange={handleChange} />
            <input name="dates" placeholder="Dates" value={newTrip.dates} onChange={handleChange} />
            <input name="slots" placeholder="Slots Available" value={newTrip.slots} onChange={handleChange} />
            <button onClick={addTrip}>Add Trip</button>

            <h3>Your Trips</h3>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h4>{trip.name}</h4>
                        <p>Dates: {trip.dates}</p>
                        <p>Slots: {trip.slots}</p>
                        <button onClick={() => deleteTrip(trip.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Dashboard() {
    const { user } = useContext(AuthContext);

    if (!user) return <p>Please log in to view your dashboard.</p>;

    return (
        <div>
            <h1>Dashboard</h1>
            {user.role === 'customer' ? <CustomerDashboard /> : <OrganizerDashboard />}
        </div>
    );
}

export default Dashboard;
