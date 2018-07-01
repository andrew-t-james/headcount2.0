import React from 'react';
import PropTypes from 'prop-types';
import ComparisonCard from '../ComparisonCard/ComparisonCard';

const ComparedDistricts = ({ comparedDistricts, comparisonData }) => {
  const displaySelectedCards = comparedDistricts.map(district =>
    <ComparisonCard
      {...district}
      key={district.id}
    />
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