import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const ComparedDistricts = ({comparedDistricts, addCardToCompare, removeCardFromCompare}) => {

  const displaySelectedCards = comparedDistricts.map(district => {
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
    <section>
      {displaySelectedCards[0]}
      <p>District Data</p>
      {displaySelectedCards[1]}
    </section>
  );
};

ComparedDistricts.propTypes = {
  comparedDistricts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCardToCompare: PropTypes.func,
  removeCardFromCompare: PropTypes.func
};

export default ComparedDistricts;