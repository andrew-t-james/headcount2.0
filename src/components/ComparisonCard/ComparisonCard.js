import React from 'react';
import PropTypes from 'prop-types';

const ComparisonCard = ({ location, stats }) => {
  return (
    <article>
      <h2>{location}</h2>
      <p>{Object.values(stats).map(value => value)}</p>
    </article>
  );
};

ComparisonCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default ComparisonCard;
