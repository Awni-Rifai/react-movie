import './App.css';
import Register from './components/userAuthorization/Register';
import WrappedLogin from "./components/userAuthorization/WrappedLogin";
import Home from './components/Home';
import Item from './components/Item';
import { Route, Routes, BrowserRouter as Router, useParams } from 'react-router-dom'

// import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from "./components/NotFound";
import SingleProduct from "./components/single-product/SingleProduct";
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
    if (localStorage.getItem('popular')) {
      this.renderMovies();
    } else {
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
      {
        popularMovies: data.data.results.slice(0, 10),
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
    if (localStorage.getItem(value)) {
      let filtered = JSON.parse(localStorage.getItem(value)).slice(0, 10);
      console.log(filtered);
      this.setState({ filteredMovies: filtered })
    } else {
      const API_KEY = "9b630d54f9503a9613dd2019e5cc7417";
      const category = value;
      console.log(category);
      //  if (this.state.filteredMovies.length > 0) return;
      const data = await axios
        .get(`https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}`)
        .catch((err) => console.log(err));
      this.setState({ filteredMovies: data.data.results.slice(0, 10) });
      console.log(data.data.results);
      localStorage.setItem(value, JSON.stringify(data.data.results.slice(0, 10)));

    }

  };

  // this.fetchMovies();

  render() {
    return (
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/login" element={<WrappedLogin />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/item" element={<Item />} />
          {/* <Route  path="/movie" element={<SingleProduct />} /> */}
          <Route

            path="/"
            element={
              <Home
                filteredMovies={this.state.filteredMovies}
                popularMovies={this.state.popularMovies}
                handleFilter={this.handleFilter}
              />
            }
          />
          <Route path="/TV/:id" element={<SingleProduct />} />
          <Route path="/movie/:movie_id" element={<SingleProduct />} />

        </Routes>

        <Footer />
      </div>
    );
  }
}





