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
    },
    {
      location: 'Adams',
      stats: {
        2004: 0.393
      }
    }
  ];

  const mockComparisonData = {};

  beforeEach(() => wrapper = shallow(
    <ComparedDistricts
      comparedDistricts={mockDistricts}
      comparisonData={mockComparisonData}
    />
  ));

  afterEach(() => wrapper.unmount());

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot when no props passed', () => {
    wrapper = shallow(
      <ComparedDistricts
        comparedDistricts={[]}
        comparisonData={{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
