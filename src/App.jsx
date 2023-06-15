import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div class="container">
        <div class="row">
          <CountriesList countries={countriesData} />

          <Routes>
            <Route
              path="/country/:countryId"
              element={<CountryDetails countries={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
