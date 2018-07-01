import React from 'react';
import PropTypes from 'prop-types';
import GraphCard from '../GraphCard/GraphCard';

import './ComparedDistricts.css';

const ComparedDistricts = ({ comparedDistricts, comparisonData }) => {
  const displaySelectedCards = comparedDistricts.map(district =>
    <GraphCard
      {...district}
      key={district.id}
    />
  );

  return (
    <section >
      <div className="comparison-container">
        {displaySelectedCards[0]}
        <h2>{comparisonData.compared}</h2>
        {displaySelectedCards[1]}
      </div>
    </section>
  );
};

ComparedDistricts.propTypes = {
  comparedDistricts: PropTypes.arrayOf(PropTypes.object).isRequired,
  comparisonData: PropTypes.object
};

export default ComparedDistricts;