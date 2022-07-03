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

const CountryCard = (props) => {
  const singleCountryHandler = () =>
    props.renderCountry(props.country.name.common);

  return (
    <Fragment>
      <Card>
        <h1>{props.country.name.common}</h1>
        <Image src={`${props.country.flags.png}`} alt="tess" />
        <h2>Region: {props.country.region}</h2>
        <Button onClick={singleCountryHandler}>More info</Button>
      </Card>
    </Fragment>
  );
};

export default CountryCard;
