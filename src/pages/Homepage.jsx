import React from "react";
import "./../App.css";

const trips = [
  {
    id: 1,
    title: "BT01",
    description: "San Francisco World Trade Center on new Server/IOT/Client",
    startTrip: [2021, 2, 13, 0, 0],
    endTrip: [2021, 2, 15, 16, 56],
    meetings: [
      {
        id: 1,
        title: "One Conference",
        description: "Key Note on One Conference",
      },
      {
        id: 2,
        title: "Zero Conference",
        description: "Workshop Zero on One Conference",
      },
    ],
  },
  {
    id: 2,
    title: "BT02",
    description: "Santa Clara Halley on new Server/IOT/Client",
    startTrip: [2021, 6, 23, 9, 0],
    endTrip: [2021, 6, 27, 16, 56],
    meetings: [
      {
        id: 3,
        title: "One Conference",
        description: "HandsOn on One Conference",
      },
      {
        id: 4,
        title: "One Conference",
        description: "Key Note on One Conference",
      },
    ],
  },
  {
    id: 3,
    title: "BT03",
    description: "San Cose City Halley on Docker/IOT/Client",
    startTrip: [2021, 12, 13, 9, 0],
    endTrip: [2021, 12, 15, 16, 56],
    meetings: [
      {
        id: 5,
        title: "One Conference",
        description: "Key Note on One Conference",
      },
    ],
  },
];

function Home() {
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
              <span>{`${t.startTrip[15]}-${t.startTrip[14]}-${t.startTrip[13]}-${t.startTrip[12]}-${t.startTrip[11]}-${t.startTrip[10]}-${t.startTrip[9]}-${t.startTrip[8]}-${t.startTrip[7]}-${t.startTrip[6]}-${t.startTrip[5]}-${t.startTrip[4]}-${t.startTrip[3]}-${t.startTrip[2]}-${t.startTrip[1]}-${t.startTrip[0]}`}</span>
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
        <select id="month">
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
      <section id="products">{trips.map(renderTrip)}</section>
    </main>
  );
}

export default Home;
