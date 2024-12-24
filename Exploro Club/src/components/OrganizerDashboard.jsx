import React, { useState } from 'react';

function OrganizerDashboard() {
    const [trips, setTrips] = useState([]);
    const [newTrip, setNewTrip] = useState({ name: '', description: '', dates: '', price: '', slots: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTrip({ ...newTrip, [name]: value });
    };

    const addTrip = () => {
        setTrips([...trips, { ...newTrip, id: trips.length + 1 }]);
        setNewTrip({ name: '', description: '', dates: '', price: '', slots: '' });
    };

    const deleteTrip = (id) => {
        setTrips(trips.filter(trip => trip.id !== id));
    };

    return (
        <div>
            <h1>Organizer Dashboard</h1>

            <h2>Add New Trip</h2>
            <input name="name" placeholder="Name" value={newTrip.name} onChange={handleChange} />
            <input name="description" placeholder="Description" value={newTrip.description} onChange={handleChange} />
            <input name="dates" placeholder="Dates" value={newTrip.dates} onChange={handleChange} />
            <input name="price" placeholder="Price" value={newTrip.price} onChange={handleChange} />
            <input name="slots" placeholder="Slots" value={newTrip.slots} onChange={handleChange} />
            <button onClick={addTrip}>Add Trip</button>

            <h2>Your Trips</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <button onClick={() => deleteTrip(trip.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrganizerDashboard;