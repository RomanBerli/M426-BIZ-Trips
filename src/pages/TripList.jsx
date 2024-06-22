import React from "react";

export default function TripList({ trips }) {
  return (
    <div>
      <h1>Your Trip List</h1>
      {trips.length === 0 ? (
        <p>No trips added yet.</p>
      ) : (
        trips.map((trip) => (
          <div key={trip.id} className="trip">
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <span>
              {trip.startTrip[2]}-{trip.startTrip[1]}-{trip.startTrip[0]}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
