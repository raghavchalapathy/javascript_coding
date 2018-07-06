import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

// all the className are components
// a controlled field is component valye is set up by component state
export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }



}
