import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardContainer.css';

const CardContainer = ({ districts, addCardToCompare, removeCardFromCompare}) => {

  const districtData = districts.map(district => {
    return (
      <Card
        {...district}
        key={district.location}
        addCard={addCardToCompare}
        removeCard={removeCardFromCompare}
      />
    );
  });

  return (
    <div>
      { districtData &&
        <div className="card-container">{districtData}</div>
      }
      {
        !districtData.length &&
        <div className="card-container-error">Oops No District by that name</div>
      }
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCardToCompare: PropTypes.func,
  removeCardFromCompare: PropTypes.func
};

export default CardContainer;