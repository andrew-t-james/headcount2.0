import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import './GraphCard.css';

const GraphCard = ({ location, stats }) => {
  const setColorsForValues = Object.values(stats)
    .map(val => val > 0.5 ? 'rgba(39, 174, 96, 0.4)' : 'rgba(235, 77, 75, 0.4)');
  const graphData = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: location,
        backgroundColor: setColorsForValues,
        borderColor: setColorsForValues,
        borderWidth: 1,
        hoverBackgroundColor: setColorsForValues,
        hoverBorderColor: setColorsForValues,
        data: Object.values(stats)
      }
    ]
  };

  return (
    <div className="graph-card">
      <h2>{location}</h2>
      <Bar
        data={graphData}
        options={{
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

GraphCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default GraphCard;
