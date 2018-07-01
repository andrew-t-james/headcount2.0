import React from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import { shallow } from 'enzyme';

describe('CardContainer test suite', () => {
  let wrapper;
  const mockData = [
    {
      location:'The Moon',
      stats: {
        2002: 1,
        2003: 6,
        2004: 8,
        2005: 0
      },
      id: 1
    },
    {
      location:'The Sun',
      stats: {
        2002: 1,
        2007: 6,
        2004: 8,
        2009: 0
      },
      id: 2
    },
    {
      location:'Jupiter',
      stats: {
        2002: 1,
        2009: 6,
        2010: 8,
        2004: 0
      },
      id: 3
    }
  ];

  beforeEach(() => wrapper = shallow(<CardContainer districts={mockData}/>));

  afterEach(() => wrapper.unmount());

  test('should be three cards created in the CardContainer when given props array', () => {
    const cards = wrapper.find(Card).length;
    expect(cards).toBe(3);
  });


  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot when no district data is available', () => {
    const mockDistricts = [];
    wrapper = shallow(<CardContainer districts={mockDistricts} />);
    expect(wrapper).toMatchSnapshot();
  });
});
