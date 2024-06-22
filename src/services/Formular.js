import React from "react";
import "./Formular.css";
export const FormularComponent = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Melde Sie sich hier an.</h1>
      </header>
      <div className="ganz">
        <div className="formular">
          <h3>Füllen Sie bitte Folgendes Formular:</h3>
          <form>
            <input name="vorname" type="text" placeholder="Vorname" required />
            <br />
            <br />

            <input
              name="nachname"
              type="text"
              placeholder="Nachname"
              required
            />
            <br />
            <br />

            <input name="email" type="email" placeholder="Email" required />
            <br />
            <br />

            <input
              name="telefonnummer"
              type="tel"
              placeholder="Telefonnummer"
              required
            />
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
