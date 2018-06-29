import React from 'react';
import Card from '../Card/Card';

const ComparedDistricts = ({comparedDistricts}) => {

  console.log(comparedDistricts)

  const displaySelectedCards = comparedDistricts.map(district => <Card {...district} key={district.location}/>)
  console.log(this);
  return (
    <div>
      {displaySelectedCards}
    </div>
  );
}

export default ComparedDistricts;