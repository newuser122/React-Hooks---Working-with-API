import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Button } from './components/button.component';
import CountryCardList from './components/country-card-list.component';
import SingleCountryCard from './components/single-country.component';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #333;
  margin: 50px 0;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [singleCountryToRender, setSingleCountryToRender] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((countries) => setCountries(countries));
  }, []);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${singleCountryToRender}`)
      .then((response) => response.json())
      .then((country) => setCountry(country));
  }, [singleCountryToRender]);

  return (
    <Wrapper>
      <Title>Click on a team to see their squad</Title>
      <Fragment>
        {countries.length > 0 && singleCountryToRender === '' && (
          <CountryCardList
            countries={countries}
            renderCountry={setSingleCountryToRender}
          />
        )}

        {country.length === 1 && singleCountryToRender !== '' && (
          <SingleCountryCard
            country={country}
            renderCountry={setSingleCountryToRender}
          />
        )}
      </Fragment>
    </Wrapper>
  );
}

export default App;
