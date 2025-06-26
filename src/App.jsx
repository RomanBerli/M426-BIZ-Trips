import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage";
import Sommer from "./pages/Sommer";
import Winter from "./pages/Winter";
import Fruehling from "./pages/Fruehling";
import Herbst from "./pages/Herbst";
import Footer from "./Footer";
import TripList from "./pages/TripList";


const FormularComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/homepage");
  };

  return (
      <div className="App">
        <header className="header">
          <h3>Füllen Sie bitte folgendes Formular aus:</h3>
        </header>
        <div className="ganz">
          <div className="formular">
            <form onSubmit={handleSubmit}>
              <input name="vorname" type="text" placeholder="Vorname" required />
              <br />
              <br />

              <input name="nachname" type="text" placeholder="Nachname" required />
              <br />
              <br />

              <input name="email" type="email" placeholder="Email" required />
              <br />
              <br />

              <input name="telefonnummer" type="tel" placeholder="Telefonnummer" required />
              <br />
              <br />
              <br />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

const App = () => {
  const [tripList, setTripList] = useState([]);

  const addToTripList = (trip) => {
    setTripList((prevList) => [...prevList, trip]);
  };

  return (
      <>


        <Routes>
          <Route path="/" element={<FormularComponent />} />
          <Route path="/homepage" element={<Home addToTripList={addToTripList} />} />
          <Route path="/winter" element={<Winter addToTripList={addToTripList} />} />
          <Route path="/fruehling" element={<Fruehling addToTripList={addToTripList} />} />
          <Route path="/sommer" element={<Sommer addToTripList={addToTripList} />} />
          <Route path="/herbst" element={<Herbst addToTripList={addToTripList} />} />
          <Route path="/triplist" element={<TripList tripList={tripList} />} />
        </Routes>

      </>
  );
};

export default App;
