import React from 'react';
import PropTypes from 'prop-types';

const ComparedDistricts = ({ comparedDistricts, comparisonData }) => {
  const displaySelectedCards = comparedDistricts.map(district =>
    <article key={district.id}>
      <h2>{district.location}</h2>
      <p>{Object.values(district.stats).map(value => value)}</p>
    </article>
  );

  return (
    <section>
      {displaySelectedCards[0]}
      <p>{comparisonData.compared}</p>
      {displaySelectedCards[1]}
    </section>
  );
};

ComparedDistricts.propTypes = {
  comparedDistricts: PropTypes.arrayOf(PropTypes.object).isRequired,
  comparisonData: PropTypes.object
};

export default ComparedDistricts;