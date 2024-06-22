import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sommer from "./pages/Sommer";
import Winter from "./pages/Winter";
import Fruehling from "./pages/Fruehling";
import Herbst from "./pages/Herbst";

const trips = [
  {
    id: 1,
    title: "BT01",
    description: "San Francisco World Trade Center on new Server/IOT/Client ",
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
            <img src={"images/items/" + t.id + ".jpg"} alt={t.title} />
          </div>
          <figcaption>
            <a href="#">{t.title}</a>
            <div>
              <span>
                {t.startTrip[2] + "-" + t.startTrip[1] + "-" + t.startTrip[0]}
              </span>
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
          {/* Fügen Sie hier die restlichen Monate hinzu */}
        </select>
      </section>
      <section id="products">{trips.map(renderTrip)}</section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Home</Link> | <Link to="/winter">Winter</Link> | <Link to="/fruehling">Fruehling</Link> | <Link to="/sommer">Sommer</Link> | <Link to="/herbst">Herbst</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/fruehling" element={<Fruehling />} />
        <Route path="/sommer" element={<Sommer />} />
        <Route path="/herbst" element={<Herbst />} />
      </Routes>
      <Footer />
    </Router>
  );
}
