import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const ComparedDistricts = ({ comparedDistricts }) => {
  comparedDistricts = [
    {
      location: 'hellow',
      stats: {
        2000: 0.292
      }
    },
    {
      location: 'he',
      stats: {
        2000: 0.123
      }
    }
  ];
  const displaySelectedCards = comparedDistricts.map(district =>
    <article>
      <h2>{district.location}</h2>
      <p>{district.stats[2000]}</p>
    </article>
  );
  return (
    <section>
      {displaySelectedCards[0]}
      <p>District Data</p>
      {displaySelectedCards[1]}
    </section>
  );
};

ComparedDistricts.propTypes = {
  comparedDistricts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ComparedDistricts;