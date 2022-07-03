import { Fragment } from 'react';
import styled from 'styled-components';
import { Button } from './button.component';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  border: 4px solid #444;
  border-radius: 9px;
  padding: 25px;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 250px;
  height: 125px;
`;

const SingleCountryCard = (props) => {
  const singleCountry = props.country[0];
  const singleCountryHandler = () => props.renderCountry('');

  return (
    <Fragment>
      <Card>
        <h1>{singleCountry.name.common}</h1>
        <Image src={`${singleCountry.flags.png}`} alt="tess" />
        <h2>
          Capital:{' '}
          {singleCountry.hasOwnProperty('capital')
            ? singleCountry.capital[0]
            : 'not provided :('}{' '}
          <br />
          Region: {singleCountry.region} <br />
          Sub Region: {singleCountry.subregion} <br />
          Population:{' '}
          {(
            Math.round((singleCountry.population / 1000000) * 100) / 100
          ).toFixed(2)}
          M <br />
          Area: {singleCountry.area} <br />
          Map:{' '}
          <a href={singleCountry.maps.googleMaps} style={{ color: 'blue' }}>
            Click here for google maps
          </a>{' '}
          <br />
        </h2>

        <h3>
          Is independent?{' '}
          {singleCountry.independent ? (
            <span style={{ color: 'green' }}>Yes</span>
          ) : (
            <span style={{ color: 'red' }}>No</span>
          )}
        </h3>

        <Button onClick={singleCountryHandler}>Back to all countries</Button>
      </Card>
    </Fragment>
  );
};

export default SingleCountryCard;
