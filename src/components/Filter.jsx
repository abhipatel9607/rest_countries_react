/** @format */

import { useEffect, useState, useContext } from "react";
import { CountriesContext } from "./AppContent";

function Filter() {
  const [filterRegion, setFilterRegion] = useState("Filter by Region");
  const { allCountries, setCurCountries } = useContext(CountriesContext);

  const regions = allCountries.reduce((acc, country) => {
    acc.includes(country.region) ? null : acc.push(country.region);
    return acc;
  }, []);
  regions.unshift("Filter by Region");

  useEffect(() => {
    const filteredCountries =
      filterRegion === "Filter by Region"
        ? allCountries
        : allCountries.filter((country) => country.region === filterRegion);
    setCurCountries(filteredCountries);
  }, [filterRegion, allCountries, setCurCountries]);
  return (
    <div>
      <select
        className="filter"
        onChange={(e) => setFilterRegion(e.target.value)}
        value={filterRegion}
      >
        {regions.map((region, i) => (
          <option key={i + 1} value={`${region}`}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
