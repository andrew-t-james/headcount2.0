import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ location, stats, addCard }) => {

  const districtStats = Object.keys(stats).map(stat =>
    <li className="card-stats" key={stat}>
      <span className="card-stats-year">{stat}</span>
      <span className={stats[stat] < 0.5 ? 'card-stats-low' : 'card-stats-high'}>
        {stats[stat]}
      </span>
    </li>
  );

  return (
    <div onClick={() => addCard(location, stats)} className="card">
      <h2 className="card-location">{location}</h2>
      <ul className="card-list">
        {districtStats}
      </ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  addCard: PropTypes.func
};

export default Card;