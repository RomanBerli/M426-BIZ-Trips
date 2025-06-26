import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../styling/hompage.css";
import Header from "./../Header";
import Footer from "./../Footer";
import { getTrips } from "../services/tripService";

function Home({ addToTripList }) {
  const [trips, setTrips] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await getTrips();
      setTrips(response.data);
      setFilteredTrips(response.data);
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

    setFilteredTrips(filtered);
  }, [selectedMonth, trips]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleAddToTripList = (trip) => {
    addToTripList({ ...trip, imagePath: `images/images/${trip.id}.png` });
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
    const imgSrc = `images/images/${t.id}.png`;
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
                <span>{`${t.startTrip[2]}-${t.startTrip[1]}-${t.startTrip[0]}`}</span>
              </div>
              <p>{t.description}</p>
              <div>
                <button type="button" onClick={() => handleAddToTripList(t)}>
                  Add to Triplist
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
        <Header season="home" />
        <main>
          <nav>
            <Link to="/">Formular</Link> | <Link to="/triplist">Trip List</Link>
          </nav>
          <section id="filters">
            <label htmlFor="month">Filter by Month:</label>
            <select id="month" value={selectedMonth} onChange={handleMonthChange}>
              <option value="">All months</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </section>
          <section id="products">{filteredTrips.map(renderTrip)}</section>
        </main>
        <Footer season="home" />
      </div>
  );
}

export default Home;
