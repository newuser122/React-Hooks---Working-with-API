import styled from 'styled-components';
import CountryCard from './country-card.component';

const CardList = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const CountryCardList = (props) => (
  <CardList>
    {props.countries.map((country, i) => {
      return (
        <CountryCard
          key={i}
          country={country}
          renderCountry={props.renderCountry}
        />
      );
    })}
  </CardList>
);

export default CountryCardList;
