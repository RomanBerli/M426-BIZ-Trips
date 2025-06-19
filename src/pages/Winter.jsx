import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import TripList from "./TripList";

const trips = [
  {
    id: 1,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 100,
    startTrip: [2021, 2, 13],
    endTrip: [2021, 2, 15],
    meetings: [
      // {
      //   id: 1,
      //   title: "Work ",
      //   description: "Working in the Office",
      // },
      // {
      //   id: 2,
      //   title: "Zero Conference",
      //   description: "Workshop Zero on One Conference",
      // },
    ],
  },
  {
    id: 2,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 100,
    startTrip: [2021, 2, 13],
    endTrip: [2021, 2, 15],
    meetings: [
  ],
  },
  {
    id: 3,
    title: "Buissnes Trip",
    description: "Winter Buissnes Trip to Norway",
    category: "Ausflug",
    price: 200,
    startTrip: [2021, 1, 23],
    endTrip: [2021, 1, 27],
    meetings: [
    ],
  },
  {
    id: 4,
    title: "Meeting",
    description: "Meeting in the Office",
    category: "Meeting",
    price: 350,
    startTrip: [2021, 12, 13],
    endTrip: [2021, 12, 15],
    meetings: [
    ],
  },
];

export default function Winter() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    let filtered = trips;

    if (selectedMonth) {
      filtered = filtered.filter(
        (trip) => trip.startTrip[1] === parseInt(selectedMonth)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (trip) => trip.category === selectedCategory
      );
    }

    if (selectedPrice) {
      filtered = filtered.filter((trip) => {
        switch (selectedPrice) {
          case "low":
            return trip.price < 150;
          case "medium":
            return trip.price >= 150 && trip.price <= 300;
          case "high":
            return trip.price > 300;
          default:
            return true;
        }
      });
    }

    setFilteredTrips(filtered);
  }, [selectedMonth, selectedCategory, selectedPrice]);

  function addToTripList(trip) {
    setTripList((prevList) => [...prevList, trip]);
  }

  function renderTrip(tripData) {
    const startDate = new Date(tripData.startTrip[0], tripData.startTrip[1], tripData.startTrip[2]);
    const endDate = new Date(tripData.endTrip[0], tripData.endTrip[1], tripData.endTrip[2]);
    const tripDurationMs = endDate - startDate;

    const tripDurationDays = tripDurationMs / (1000 * 60 * 60 * 24);
    return (
      <div className="product" key={tripData.id}>
        <figure>
          <div>
            <img src={"images/winter/" + tripData.id + ".png"} alt={tripData.title} />
          </div>
          <figcaption>
            <a href="#">{tripData.title}</a>
            <div>
              <span>
              Start:{tripData.startTrip[2] + "." + tripData.startTrip[1] + "." + tripData.startTrip[0]}
              <br />
              End:{tripData.endTrip[2] + "." + tripData.endTrip[1] + "." + tripData.endTrip[0]}
              <br />
              Length of the trip: {tripDurationDays} days
              </span>
            </div>
            <p>{tripData.description}</p>
            <div>
              <button type="button" onClick={() => addToTripList(tripData)}>
                Add to Triplist
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/triplist">Trip List</Link>
      </nav>
      <main>
        <section id="filters">
          <div>
            <label htmlFor="month">Filter by Month:</label>
            <select
              id="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">All months</option>
              <option value="12">December</option>
              <option value="2">January</option>
              <option value="3">February</option>
            </select>
          </div>
          <div>
            <label htmlFor="category">Filter by Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All categories</option>
              <option value="Ausflug">Ausflug</option>
              <option value="Meeting">Meeting</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Filter by Price:</label>
            <select
              id="price"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">All prices</option>
              <option value="low">Low (under 150)</option>
              <option value="medium">Medium (150-300)</option>
              <option value="high">High (above 300)</option>
            </select>
          </div>
        </section>
        <section id="products">{filteredTrips.map(renderTrip)}</section>
      </main>
    </div>
  );
}
