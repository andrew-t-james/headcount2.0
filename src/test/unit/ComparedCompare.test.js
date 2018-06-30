import React from 'react';
import { shallow } from 'enzyme';
import ComparedDistricts from '../../components/ComparedDistricts/ComparedDistricts';

describe('ComparedDistrict unit test suite', () => {
  let wrapper;
  const mockDistricts = [
    {
      location: 'Adams',
      stats: {
        2004: 0.393
      }
    }
  ];
  beforeEach(() => wrapper = shallow(<ComparedDistricts comparedDistricts={mockDistricts}/>));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
