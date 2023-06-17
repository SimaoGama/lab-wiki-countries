import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/country/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
