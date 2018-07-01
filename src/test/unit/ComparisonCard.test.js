import React from 'react';
import { shallow } from 'enzyme';
import ComparisonCard from '../../components/ComparisonCard/ComparisonCard';

describe('GraphCard unit test suite', () => {
  let wrapper;
  const mockDistrict = {
    'ADAMS 20': 0.294,
    'COLORADO': 0.234,
    compared: 1.345
  };

  beforeEach(() => wrapper = shallow(<ComparisonCard {...mockDistrict}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot when no data is passed', () => {
    wrapper = shallow(<ComparisonCard {...{}} />);
    expect(wrapper).toMatchSnapshot();
  });

});
