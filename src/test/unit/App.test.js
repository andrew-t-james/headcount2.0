import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App/App';

describe('App unit test suite', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  afterEach(() => wrapper.unmount());

  test('should have a default state properties', () => {
    const defaultState = {
      districts: [],
      comparedDistricts: [],
      comparisonData: {}
    };

    expect(wrapper.state()).toEqual(defaultState);
  });

  test('should call invoke getSchoolDistrictData on mount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getSchoolDistrictData');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  test('it should update state when getSchoolDistrictData is invoked', () => {
    expect(wrapper.state('districts')).toHaveLength(0);
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper.state('districts')).toHaveLength(181);
  });

  test('it should filter districts when filterDistricts is invoked', () => {
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper.state('districts')).toHaveLength(181);
    wrapper.instance().filterDistricts('Colo');
    expect(wrapper.state('districts')).toHaveLength(2);
  });

  test('it should reset districts when a no query is passed to filterDistricts', () => {
    wrapper.instance().getSchoolDistrictData();
    wrapper.instance().filterDistricts('');
    expect(wrapper.state('districts')).toHaveLength(181);
  });

  test('it if no matches present filterSchools should not display cards ', () => {
    wrapper.instance().getSchoolDistrictData();
    wrapper.instance().filterDistricts('adkfljl');
    expect(wrapper.state('districts')).toHaveLength(0);
  });

  test('should push a new card into the comparedDistricts array', () => {
    wrapper.setState({
      districts: [
        {
          location: 'COLORADO',
          stats: {
            2004: 0.971
          },
          selected: false
        }
      ],
      comparedDistricts: [],
      comparisonData: {}
    });
    const mockComparedDistricts = [
      {
        location: 'COLORADO',
        selected: true,
        stats: {
          2004: 0.971
        }
      }
    ];
    wrapper.instance().handleSelectedDistrict('COLORADO');
    expect(wrapper.state('comparedDistricts')).toEqual(mockComparedDistricts);
  });

  test('should push add a new card into state when handleSelectedDistrict is invoked', () => {
    wrapper.setState({
      districts: [
        {
          location: 'COLORADO',
          selected: false,
          id: 1,
          stats: {
            2004: 0.971,
            2005: 0.543
          }
        },
        {
          location: 'ACADEMY',
          selected: false,
          id: 1,
          stats: {
            2004: 0.302,
            2005: 0.267
          }
        }
      ],
      comparedDistricts: [],
      comparisonData: {}
    });
    const mockComparedDistricts = [
      {
        location: 'COLORADO',
        selected: true,
        id: 1,
        stats: {
          2004: 0.971,
          2005: 0.543
        }
      },
      {
        location: 'ACADEMY',
        selected: true,
        id: 1,
        stats: {
          2004: 0.302,
          2005: 0.267
        }
      }
    ];
    wrapper.instance().districtsComparison = jest.fn();
    wrapper.instance().handleSelectedDistrict('COLORADO');
    wrapper.instance().handleSelectedDistrict('ACADEMY');
    expect(wrapper.state('comparedDistricts')).toEqual(mockComparedDistricts);
  });

  test('should shift the object and set selected to false when handleSelectedDistrict is invoked', () => {
    wrapper.setState({
      districts: [
        {
          location: 'COLORADO',
          stats: {
            2004: 0.971
          },
          selected: false
        },
        {
          location: 'ACADEMY',
          stats: {
            2004: 0.323
          },
          selected: false
        },
        {
          location: 'AGATE 300',
          stats: {
            2004: 0.323
          },
          selected: false
        }
      ],
      comparedDistricts: []
    });
    const mockComparedDistricts = [
      {
        location: 'ACADEMY',
        selected: true,
        stats: {
          2004: 0.323
        }
      },
      {
        location: 'AGATE 300',
        stats: {
          2004: 0.323
        },
        selected: true
      }
    ];
    wrapper.instance().districtsComparison = jest.fn();
    wrapper.instance().handleSelectedDistrict('COLORADO');
    wrapper.instance().handleSelectedDistrict('ACADEMY');
    wrapper.instance().handleSelectedDistrict('AGATE 300');
    expect(wrapper.state('districts')[0].selected).toBe(false);
    expect(wrapper.state('comparedDistricts')).toEqual(mockComparedDistricts);
  });

  test('should update state when districtsComparison is invoked', () => {
    wrapper.setState({
      districts: [
        {
          location: 'COLORADO',
          selected: true,
          id: 1,
          stats: {
            2004: 0.971,
            2005: 0.543
          }
        },
        {
          location: 'ACADEMY 20',
          selected: true,
          id: 1,
          stats: {
            2004: 0.302,
            2005: 0.267
          }
        }
      ],
      comparedDistricts: [],
      comparisonData: {}
    });
    const mockComparisonData ={
      'ACADEMY 20': 0.407,
      'COLORADO':0.53,
      'compared':1.302
    };
    wrapper.instance().districtsComparison();
    expect(wrapper.state('comparisonData')).toEqual(mockComparisonData);
  });


  test('should call filterDistricts with a parameter', () => {
    const spy = jest.spyOn(wrapper.instance(), 'filterDistricts');
    wrapper.instance().filterDistricts('Colo');
    expect(spy).toHaveBeenCalledWith('Colo');
  });

  test('should call handleSelectedDistrict with parameter', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSelectedDistrict');
    wrapper.setState({
      districts: [
        {
          location: 'COLORADO',
          stats: {
            2004: 0.971
          },
          selected: false
        }
      ]
    });

    wrapper.instance().handleSelectedDistrict('COLORADO');
    expect(spy).toHaveBeenCalledWith('COLORADO');
  });

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render children components when getSchoolDistricts is invoked', () => {
    wrapper.instance().getSchoolDistrictData();
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot when filterDistricts in invoked', () => {
    wrapper.instance().filterDistricts('Colo');
    expect(wrapper).toMatchSnapshot();
  });

});
