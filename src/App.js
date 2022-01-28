import './App.css';
import WrappedLogin from './components/userAuthorization/WrappedLogin';
import Register from './components/userAuthorization/Register';
import Home from './components/Home';
import  Item from './components/Item';
import {Route,Routes,BrowserRouter as Router, useParams} from 'react-router-dom'

import Navbar from './components/Navbar';
import SingleProduct from './components/single-product/SingleProduct';
import Footer from './components/Footer';
import { loadScripts } from './loadScripts';
import { useEffect, useState } from 'react';
import { fetchMovies } from './fetchData';
import axios from 'axios';
import NotFound from './components/NotFound';
import React, { Component } from 'react';

export default class App extends Component {
  state={
    popularMovies:[],
    render:false
  }
  componentDidMount(){
    window.scrollTo(0,0);
    if(localStorage.getItem('popularMovies')){
      
      this.renderMovies();
      console.log('loacal');
      return;
      
    }
    console.log('api');
    this.fetchMovies();
  }
   fetchMovies = async () => {
    const API_KEY='9b630d54f9503a9613dd2019e5cc7417';
    
    if(this.state.popularMovies.length>0)return;
    
      const data = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`).catch(err=>console.log(err));
      ;
      localStorage.setItem('popularMovies',JSON.stringify(data.data.results))
     
  
      this.setState({popularMovies: data.data.results});
    }


    renderMovies=()=>{
      let movies=(JSON.parse(localStorage.getItem('popularMovies')));
      movies=movies.filter(movie=>movie.name);
      this.setState({popularMovies:movies.slice(0,10)});
      
    };
  render() {
    return (
      <div className="App">
       
          <Navbar/>
          <Routes>
          <Route exact path="/login" element={ <WrappedLogin/>}/>
          <Route exact path="/register" element={ <Register/>}/>
          <Route exact path="/" element={ <Home popularMovies={this.state.popularMovies}/>}/>
          <Route path="*" element={<NotFound />} />
          
          <Route exact path="/item" element={ <Item/>}/>
          <Route exact path="/movie" element={ <SingleProduct/>}/>
       
       
        </Routes>
       
        <Footer/>
        
      </div>
    );;
  }
}




