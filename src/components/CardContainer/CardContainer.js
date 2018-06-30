import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardContainer.css';

const CardContainer = ({ districts, addCardToComparedDistricts}) => {

  const districtData = districts.map(district => {
    return (
      <Card 
        {...district} 
        key={district.location} 
        addCard={addCardToComparedDistricts}
      />
    );
  });

  return (
    <div>
      <h1>Card Container</h1>
      <div className="card-container">{districtData}</div>
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCardToComparedDistricts: PropTypes.func
};

export default CardContainer;
