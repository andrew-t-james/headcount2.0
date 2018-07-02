import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardContainer.css';


const CardContainer = ({ districts, handleSelectedDistrict }) => {
  const districtData = districts.map(district => {
    return (
      <Card
        {...district}
        key={district.id}
        handleSelectedDistrict={handleSelectedDistrict}
      />
    );
  });

  return (
    <div>
      { districtData &&
        <div className="card-container">
          {districtData}
        </div>
      }
      {
        !districtData.length &&
        <div className="card-container">
          <h2 className="card-container-error-message">Oops No District by that name</h2>
        </div>
      }
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectedDistrict: PropTypes.func
};

export default CardContainer;