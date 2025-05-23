import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import TripList from "./TripList";

const trips = [
  {
    id: 1,
    title: "Meeting",
    description: "Meeting in the Office",
    category: "Meeting",
    price: 100,
    startTrip: [2021, 11, 13, 0, 0],
    endTrip: [2021, 11, 15, 16, 56],
    meetings: [
    ],
  },
  {
    id: 2,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 200,
    startTrip: [2021, 10, 23, 9, 0],
    endTrip: [2021, 10, 27, 16, 56],
    meetings: [
      
    ],
  },
  {
    id: 3,
    title: "Buissnes Trip",
    description: "Autumn Buissnes Trip",
    category: "Ausflug",
    price: 350,
    startTrip: [2021, 9, 13, 9, 0],
    endTrip: [2021, 9, 15, 16, 56],
    meetings: [
    ],
  },
  {
    id: 4,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 150,
    startTrip: [2021, 10, 13, 9, 0],
    endTrip: [2021, 10, 15, 16, 56],
    meetings: [
    ],
  },
];

export default function Herbst() {
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

  function renderTrip(t) {
    return (
      <div className="product" key={t.id}>
        <figure>
          <div>
            <img src={"images/herbst/" + t.id + ".png"} alt={t.title} />
          </div>
          <figcaption>
            <a href="#">{t.title}</a>
            <div>
              <span>
              {t.startTrip[3] + "-" + t.startTrip[2] + "-" + t.startTrip[1] + "-" + t.startTrip[0]}
              </span>
            </div>
            <p>{t.description}</p>
            <div>
              <button type="button" onClick={() => addToTripList(t)}>
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
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
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
