import React from 'react';
import { shallow } from 'enzyme';
import ComparisonCard from '../../components/ComparisonCard/ComparisonCard';

describe('ComparisonCard unit test suite', () => {
  let wrapper;
  const mockDistrict = {
    location: 'COLORADO',
    stats: {
      2005: 0.353
    }
  };

  beforeEach(() => wrapper = shallow(<ComparisonCard {...mockDistrict}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
