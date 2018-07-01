import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Search from '../Search/Search';
import ComparedDistricts from '../ComparedDistricts/ComparedDistricts';

import DistrictRepository from '../../helper';
import kinderGardenerData from '../../data/kindergartners_in_full_day_program';

import './App.css';

const schoolDistricts = new DistrictRepository(kinderGardenerData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      comparedDistricts: [
        {
          location: 'COLORADO',
          stats: {
            2004: 0.24,
            2005: 0.278,
            2006: 0.337,
            2007: 0.395,
            2008: 0.536,
            2009: 0.598,
            2010: 0.64,
            2011: 0.672,
            2012: 0.695,
            2013: 0.703,
            2014: 0.741
          }
        }
      ]
    };
  }

  componentDidMount = () => {
    this.getSchoolDistrictData();
  }

  getSchoolDistrictData = () => {
    const districts = Object.values(schoolDistricts.stats);
    this.setState({ districts });
    return districts;
  }

  filterDistricts = query => {
    const queriedDistrict = schoolDistricts.findAllMatches(query);

    if (query === '') {
      this.setState({ districts: this.getSchoolDistrictData() });
    } else {
      this.setState({ districts: queriedDistrict });
    }
  }

  handleComparedDistrictsData = districtName => {
    const { comparedDistricts, districts } = this.state;
    const foundDistrict = districts.find(district => district.location === districtName);

    if (comparedDistricts.length > 1) {
      const removedDistract = comparedDistricts.shift();
      removedDistract.selected = false;
    }

    foundDistrict.selected = !foundDistrict.selected;
    this.setState({ comparedDistricts: [...comparedDistricts, foundDistrict] });
  }

  render() {
    const { districts, comparedDistricts } = this.state;

    return (
      <main className="grid-container">
        <header className="header">
          <h1>HeadCount 2.0</h1>
        </header>
        <section className="compare-container">
          <ComparedDistricts
            comparedDistricts={comparedDistricts}
          />
        </section>
        <aside className="sidebar">
          <Search
            filterDistricts={this.filterDistricts}
          />
          <CardContainer
            districts={districts}
            handleComparedDistrictsData={this.handleComparedDistrictsData}
          />
        </aside>
      </main>
    );
  }
}

export default App;