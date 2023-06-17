import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const foundCountry = countries.find(
      (country) => country.alpha3Code === countryId
    );

    if (foundCountry) {
      setCountry(foundCountry);
    }
  }, [countryId, countries]);

  const getCountryByBorderCode = (borderCode) => {
    const foundCountry = countries.find(
      (country) => country.alpha3Code === borderCode
    );
    return foundCountry?.name.official || '';
  };

  return (
    <>
      {country && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                {country.capital[0] ? (
                  <td>{country.capital[0]}</td>
                ) : (
                  <td>No Capital</td>
                )}
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.length > 0 ? (
                      country.borders.map((border) => (
                        <li key={border}>
                          <Link to={`/country/${border}`}>
                            {getCountryByBorderCode(border)}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No Borders</li>
                    )}
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
