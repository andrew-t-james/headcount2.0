import React from 'react';
import { shallow } from 'enzyme';
import GraphCard from '../../components/GraphCard/GraphCard';

describe('GraphCard unit test suite', () => {
  let wrapper;
  const mockDistrict = {
    location: 'COLORADO',
    stats: {
      2005: 0.353
    }
  };

  beforeEach(() => wrapper = shallow(<GraphCard {...mockDistrict}/>));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
