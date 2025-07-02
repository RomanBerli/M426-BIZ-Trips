import React from "react";
import { useNavigate } from "react-router-dom"; // React Router v6
 
export default function Header() {
  const navigate = useNavigate();
 
  const handleSeasonChange = (event) => {
    const season = event.target.value;
    switch (season) {
      case "all":
        navigate("/homepage");
        break;
      case "1":
        navigate("/winter");
        break;
      case "2":
        navigate("/fruehling");
        break;
      case "3":
        navigate("/sommer");
        break;
      case "4":
        navigate("/herbst");
        break;
      default:
        break;
    }
  };
 
  return (
<header>
<nav>
<ul>
<li>
<img width="150px" alt="Business Trips" src="/images/logo.png" />
<label htmlFor="seasons"></label>{" "}
<select id="seasons" onChange={handleSeasonChange} defaultValue="">
<option value="" disabled>Jahreszeiten</option>
<option value="all">Alle</option>
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