import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homepage";
import Sommer from "./pages/Sommer";
import Winter from "./pages/Winter";
import Fruehling from "./pages/Fruehling";
import Herbst from "./pages/Herbst";
import Header from "./Header";
import Footer from "./Footer";

const FormularComponent = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Nach dem Absenden zur Homepage navigieren
    navigate("/homepage");
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Melden Sie sich hier an.</h1>
      </header>
      <div className="ganz">
        <div className="formular">
          <h3>Füllen Sie bitte folgendes Formular aus:</h3>
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

            <input name="zeit" type="time" placeholder="Zeit" required />
            <br />
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer id="footer">
        <p>&copy; biztrips</p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
   
      <Routes>
        <Route path="/" element={<FormularComponent />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/fruehling" element={<Fruehling />} />
        <Route path="/sommer" element={<Sommer />} />
        <Route path="/herbst" element={<Herbst />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
