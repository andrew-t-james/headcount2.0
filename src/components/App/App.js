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
      comparedDistricts: []
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
      this.setState({ districts: this.getSchoolDistrictData() });
    } else {
      this.setState({ districts: queriedDistrict });
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
    const { comparedDistricts } = this.state;

    const districtObject = {
      location,
      stats
    };

    this.setState({
      comparedDistricts: [...comparedDistricts, districtObject]
    });
  }

  removeCardFromCompare = location => {
    const comparedDistricts = this.state.comparedDistricts.filter( card => location !== card.location);

    this.setState({ comparedDistricts });
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
            addCardToCompare={this.addCardToCompare}
            removeCardFromCompare={this.removeCardFromCompare}
          />
        </section>
        <aside className="sidebar">
          <Search
            filterDistricts={this.filterDistricts}
          />
          <CardContainer
            districts={districts}
            addCardToCompare={this.addCardToCompare}
            removeCardFromCompare={this.removeCardFromCompare}
          />
        </aside>
      </main>
    );
  }
}

export default App;