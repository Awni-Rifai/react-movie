import React, { Component } from 'react';
import MovieDesc from './MovieDesc';
import MovieInfo from './MovieInfo';

export default class SingleProduct extends Component {
  render() {
    return (<div>
        <MovieInfo/>
        <MovieDesc/>
    </div>);
  }
}
