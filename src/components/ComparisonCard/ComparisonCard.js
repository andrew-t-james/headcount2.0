import React from 'react';
import PropTypes from 'prop-types';

import './ComparisonCard.css';

const ComparisonCard = props => {
  const comparedDistrictKeys = Object.keys(props);
  if (!comparedDistrictKeys.length) {
    return (
      <div>
        <h2 className="comparison-card-message">Please Add a District to Compare</h2>
      </div>
    );
  }
  return (

    <div>
      { comparedDistrictKeys[0] &&
        <h2>{comparedDistrictKeys[0]} : {props[comparedDistrictKeys[0]]}</h2>
      }
      { comparedDistrictKeys[2] &&
        <h2>Comparison : {props[comparedDistrictKeys[2]]}</h2>
      }
      { comparedDistrictKeys[1] &&
        <h2>{comparedDistrictKeys[1]} : {props[comparedDistrictKeys[1]]}</h2>
      }
    </div>
  );
};

ComparisonCard.propTypes = {
  props: PropTypes.object
};

export default ComparisonCard;
