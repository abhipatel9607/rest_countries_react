/** @format */

import Search from "./Search";
import Filter from "./Filter";
import Countries from "./Countries";
import { useEffect, useState, createContext } from "react";

export const CountriesContext = createContext();

export const AppContent = () => {
  const [curCountries, setCurCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((countriesResponse) => countriesResponse.json())
      .then((countriesData) => {
        console.log(countriesData);
        setCurCountries(countriesData);
        setAllCountries(countriesData);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <CountriesContext.Provider
      value={{ curCountries, setCurCountries, allCountries }}
    >
      <div className="main">
        <div className="container">
          <div className="main-head">
            <Search
              allCountries={allCountries}
              setCurCountries={setCurCountries}
            />
            <Filter
              allCountries={allCountries}
              setCurCountries={setCurCountries}
            />
          </div>
          <Countries />
        </div>
      </div>
    </CountriesContext.Provider>
  );
};

// export default AppContent;
