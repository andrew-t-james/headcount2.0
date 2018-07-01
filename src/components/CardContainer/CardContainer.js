import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardContainer.css';

const CardContainer = ({ districts, addCardToCompare, handleComparedDistrictsData }) => {

  const districtData = districts.map(district => {
    return (
      <Card
        {...district}
        key={district.location}
        addCard={addCardToCompare}
        handleComparedDistrictsData={handleComparedDistrictsData}
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
        <div className="card-container">
          <h2>Oops No District by that name</h2>
        </div>
      }
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCardToCompare: PropTypes.func,
  handleComparedDistrictsData: PropTypes.func
};

export default CardContainer;