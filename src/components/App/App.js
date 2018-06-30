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
      comparedDistricts: [{
        location: "ACADEMY 20",
        stats: {
          2004: 0.302,
          2005: 0.267,
          2006: 0.354,
          2007: 0.392,
          2008: 0.385,
          2009: 0.39
        }
      },]
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

  filterDistricts = (query) => {
    const queriedDistrict = schoolDistricts.findAllMatches(query);

    if (query === '') {
      this.setState({districts: this.getSchoolDistrictData() });
    } else {
      this.setState({districts: queriedDistrict});
    }
  }

  // handleComparedDistrictsData = (location, stats) => {
  //   if('card location doesnt exist add it, unless there are already 2 then remove and add') {
  //     if(this.state.comparedDistricts.lenght < 2) {
  //       addCardToCompare(location, stats);
  //     } else {
  //       const districtObject = {
  //         location: location,
  //         stats: stats
  //       };
  //       'need to figure out how to update state using push and pop'
  //     }
  //   } else {
  //     removeCardFromCompare(location);
  //   }
  // }

  addCardToCompare = (location, stats) => {
    const districtObject = {
      location: location,
      stats: stats
    };
    this.setState({comparedDistricts: [...this.state.comparedDistricts, districtObject] });
  }

  removeCardFromCompare = (location) => {
    const comparedDistricts = this.state.comparedDistricts.filter( card => {
      return location !== card.location
    })
    this.setState({
      comparedDistricts
    })
  }

  render() {
    const { districts, comparedDistricts } = this.state;

    return (
      <main>
        <ComparedDistricts 
          comparedDistricts={comparedDistricts} 
          addCardToCompare={this.addCardToCompare}
          removeCardFromCompare={this.removeCardFromCompare}
        />
        <Search
          filterDistricts={this.filterDistricts}
        />
        <CardContainer
          districts={districts}
          addCardToCompare={this.addCardToCompare}
          removeCardFromCompare={this.removeCardFromCompare}
        />
      </main>
    );
  }
}

export default App;