/** @format */

import { CountriesContext } from "./AppContent";
import { useContext } from "react";
import CountryCard from "./CountryCard";

function Countries() {
  const { curCountries } = useContext(CountriesContext);
  return (
    <div className="countries-container">
      {curCountries.map((country, i) => (
        <CountryCard key={i + 1} country={country} />
      ))}
    </div>
  );
}

export default Countries;
