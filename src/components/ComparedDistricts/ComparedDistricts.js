import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const ComparedDistricts = ({comparedDistricts, addCardToComparedDistricts}) => {

  const displaySelectedCards = comparedDistricts.map(district => {
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
      {displaySelectedCards}
    </div>
  );
};

ComparedDistricts.propTypes = {
  comparedDistricts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCardToComparedDistricts: PropTypes.func.isRequired
};

export default ComparedDistricts;