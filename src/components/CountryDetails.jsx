import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const country = countries.find((country) => {
      return country.alpha3Code === countryId;
    });

    if (country) {
      setCountry(country);
    }
  }, [countryId, countries]);

  return (
    <>
      {country && (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                {
                  // map dos borders
                }
                <td>
                  <ul>
                    <li>
                      <Link to={`/${country.alpha2Code}`}>
                        {country.name.common}
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
