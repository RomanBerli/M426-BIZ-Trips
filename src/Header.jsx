import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img width="150px" alt="Business Trips" src="/images/logo.png" />
            <label htmlFor="seasons"></label>{" "}
            <select id="seasons">
              <option value="">Jaherszeiten</option>
              <option value="1">Winter</option>
              <option value="2">Frühling</option>
              <option value="3">Sommer</option>
              <option value="4">Herbst</option>
            </select>

          </li>
        </ul>
      </nav>
      
      
    </header>
  );
}
