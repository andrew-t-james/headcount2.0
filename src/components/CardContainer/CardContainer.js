import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardContainer.css';

const CardContainer = ({ districts, handleComparedDistrictsData}) => {

  const districtData = districts.map(district => {
    return (
      <Card
        {...district}
        key={district.location}
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
        <div className="card-container-error">Oops No District by that name</div>
      }
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleComparedDistrictsData: PropTypes.func
};

export default CardContainer;