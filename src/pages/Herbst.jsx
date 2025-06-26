import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../styling/pages.css";
import { FaPlus } from "react-icons/fa";
import { IMAGE_PATHS } from "./constants";
import Header from "./../Header";
import Footer from "./../Footer";
import { getTrips } from "../services/tripService";

export default function Herbst({ addToTripList }) {
  const [trips, setTrips] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await getTrips();
      const herbstTrips = response.data.filter(trip => [9, 10, 11].includes(trip.startTrip[1]));
      setTrips(herbstTrips);
      setFilteredTrips(herbstTrips);
    } catch (error) {
      console.error("Error fetching trips", error);
    }
  };

  useEffect(() => {
    let filtered = trips;

    if (selectedMonth) {
      filtered = filtered.filter(
          (trip) => trip.startTrip[1] === parseInt(selectedMonth)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((trip) => trip.category === selectedCategory);
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
  }, [selectedMonth, selectedCategory, selectedPrice, trips]);

  const handleAddToTripList = (trip) => {
    addToTripList({ ...trip, imagePath: `${IMAGE_PATHS.herbst}${trip.id}.png` });
    const updatedTrips = trips.map((t) => {
      if (t.id === trip.id) {
        return { ...t, successMessage: `Trip "${t.title}" successfully added!` };
      }
      return t;
    });
    setTrips(updatedTrips);
    setTimeout(() => {
      const resetTrips = trips.map((t) => {
        if (t.id === trip.id) {
          const { successMessage, ...rest } = t;
          return rest;
        }
        return t;
      });
      setTrips(resetTrips);
    }, 3000);
  };

  function renderTrip(t) {
    const imgSrc = `${IMAGE_PATHS.herbst}${t.id}.png`;
    console.log(`Rendering trip: ${t.title} with image src: ${imgSrc}`);
    return (
        <div className="product" key={t.id}>
          <figure>
            <div>
              <img
                  src={imgSrc}
                  alt={t.title}
                  onError={(e) => {
                    console.error(`Image not found: ${imgSrc}`);
                    e.target.src = '/images/placeholder.png';
                  }}
              />
            </div>
            <figcaption>
              <span className="link-style">{t.title}</span>
              <div>
              <span>
                {t.startTrip[2] +
                    "-" +
                    t.startTrip[1] +
                    "-" +
                    t.startTrip[0]}
              </span>
              </div>
              <p>{t.description}</p>
              <div>
                <button
                    type="button"
                    onClick={() => handleAddToTripList(t)}
                >
                  <FaPlus /> Add to Triplist
                </button>
                {t.successMessage && <p className="success-message">{t.successMessage}</p>}
              </div>
            </figcaption>
          </figure>
        </div>
    );
  }

  return (
      <div>
        <Header season="autumn" />
        <nav className="navigation">
          <Link to="/homepage" className="nav-link">Home</Link>
          <span>|</span>
          <Link to="/triplist" className="nav-link">Trip List</Link>
        </nav>
        <main>
          <section id="filters">
            <div className="filter-group">
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
            <div className="filter-group">
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
            <div className="filter-group">
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
        <Footer season="autumn" />
      </div>
  );
}
