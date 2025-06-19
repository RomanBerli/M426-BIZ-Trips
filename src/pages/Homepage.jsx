import React, { useState } from "react";
import "./../App.css";

const trips = [
  {
    id: 1,
    title: "Work",
    description: "Working in the Office",
    startTrip: [2021, 12, 13],
    endTrip: [2021, 12, 15],
  },
  {
    id: 2,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 100,
    startTrip: [2021, 2, 13],
    endTrip: [2021, 2, 15],
    meetings: [],
  },
  {
    id: 3,
    title: "Buissnes Trip",
    description: "Winter Buissnes Trip to Norway",
    category: "Ausflug",
    price: 200,
    startTrip: [2021, 1, 23],
    endTrip: [2021, 1, 27],
    meetings: [],
  },
  {
    id: 4,
    title: "Meeting",
    description: "Meeting in the Office",
    category: "Meeting",
    price: 350,
    startTrip: [2021, 12, 13],
    endTrip: [2021, 12, 15],
    meetings: [],
  },
  {
    id: 5,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 100,
    startTrip: [2021, 3, 13],
    endTrip: [2021, 3, 15],
    meetings: [],
  },
  {
    id: 6,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 200,
    startTrip: [2021, 4, 23],
    endTrip: [2021, 4, 27],
    meetings: [],
  },
  {
    id: 7,
    title: "Buissnes Trip",
    description: "Summer Buissnes Trip to Argentina",
    category: "Ausflug",
    price: 350,
    startTrip: [2021, 5, 13],
    endTrip: [2021, 5, 15],
    meetings: [],
  },
  {
    id: 8,
    title: "Meeting",
    description: "Meeting in the Office",
    category: "Meeting",
    price: 150,
    startTrip: [2021, 3, 13],
    endTrip: [2021, 3, 15],
    meetings: [],
  },
  {
    id: 9,
    title: "Meeting",
    description: "Meeting in the Office",
    category: "Meeting",
    price: 100,
    startTrip: [2021, 6, 13],
    endTrip: [2021, 6, 15],
    meetings: [],
  },
  {
    id: 10,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 200,
    startTrip: [2021, 7, 23],
    endTrip: [2021, 7, 27],
    meetings: [],
  },
  {
    id: 11,
    title: "Buissnes Trip",
    description: "Autumn Buissnes Trip",
    category: "Ausflug",
    price: 350,
    startTrip: [2021, 8, 13],
    endTrip: [2021, 8, 15],
    meetings: [],
  },
  {
    id: 12,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 150,
    startTrip: [2021, 8, 13],
    endTrip: [2021, 8, 15],
    meetings: [],
  },
  {
    id: 13,
    title: "Meeting",
    description: "Meeting in the Office",
    category: "Meeting",
    price: 100,
    startTrip: [2021, 9, 13],
    endTrip: [2021, 9, 15],
    meetings: [],
  },
  {
    id: 14,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 200,
    startTrip: [2021, 10, 23],
    endTrip: [2021, 10, 27],
    meetings: [],
  },
  {
    id: 15,
    title: "Buissnes Trip",
    description: "Autumn Buissnes Trip",
    category: "Ausflug",
    price: 350,
    startTrip: [2021, 9, 13],
    endTrip: [2021, 9, 15],
    meetings: [],
  },
  {
    id: 16,
    title: "Work",
    description: "Working in the Office",
    category: "Work",
    price: 150,
    startTrip: [2021, 10, 13],
    endTrip: [2021, 10, 15],
    meetings: [],
  },
];

function Home() {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredTrips = selectedMonth
    ? trips.filter((trip) => trip.startTrip[1] === parseInt(selectedMonth))
    : trips;

  function renderTrip(t) {
    return (
      <div className="product" key={t.id}>
        <figure>
          <div>
            <img src={"images/images/" + t.id + ".png"} alt={t.title} />
          </div>
          <figcaption>
            <a href="#">{t.title}</a>
            <div>
              <span>{`${t.startTrip[2]}-${t.startTrip[1]}-${t.startTrip[0]}`}</span>
            </div>
            <p>{t.description}</p>
            <div>
              <button type="button" disabled>
                Add to Triplist
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <main>
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
  );
}

export default Home;
