import './App.css';
import Login from './components/userAuthorization/Login';
import Register from './components/userAuthorization/Register';
import Home from './components/Home';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { loadScripts } from './loadScripts';
import { useEffect, useState } from 'react';
import { fetchMovies } from './fetchData';
import axios from 'axios';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    popularMovies: [],
    filteredMovies: [],
    render: false,
    category: "popular",
  };
 
  
  componentDidMount() {
  window.scrollTo(0, 0);
 
    //  if (this.state.filteredMovies.length > 0) return;
    if(localStorage.getItem('popular')){
      this.renderMovies();
    }else{
    this.fetchMovies();

    }
  }
  fetchMovies = async () => {
    const API_KEY = "9b630d54f9503a9613dd2019e5cc7417";
    const category = this.state.category;
    if (this.state.popularMovies.length > 0) return;
    const data = await axios
      .get(`https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}`)
      .catch((err) => console.log(err));
    this.setState(
      { popularMovies: data.data.results.slice(0, 10) ,
      filteredMovies: data.data.results.slice(0, 10) 
       });

      localStorage.setItem('popular', JSON.stringify(this.state.popularMovies));
   
  };

  renderMovies = () => {
    let movies = JSON.parse(localStorage.getItem("popular"));
    movies = movies.filter((movie) => movie.name);
    console.log(movies);
    this.setState({
      popularMovies: movies.slice(0, 10),
      filteredMovies: movies.slice(0, 10),
    });
  };
  handleFilter = async (value) => {
    if(localStorage.getItem(value)){
      let filtered = JSON.parse(localStorage.getItem(value));
      console.log(filtered);
      this.setState({filteredMovies: filtered})
    }else {
    const API_KEY = "9b630d54f9503a9613dd2019e5cc7417";
    const category = value;
    console.log(category);
    //  if (this.state.filteredMovies.length > 0) return;
    const data = await axios
      .get(`https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}`)
      .catch((err) => console.log(err));
    this.setState({ filteredMovies: data.data.results.slice(0, 10) });
    console.log(data.data.results);
    localStorage.setItem(value, JSON.stringify(data.data.results.slice(0,10)));

    }

  };

  // this.fetchMovies();

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/"
              element={
                <Home
                  filteredMovies={this.state.filteredMovies}
                  popularMovies={this.state.popularMovies}
                  handleFilter={this.handleFilter}
                />
              }
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}





