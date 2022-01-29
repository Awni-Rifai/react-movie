import React, { Component } from 'react';
import MovieDesc from './MovieDesc';
import MovieInfo from './MovieInfo';
import Card from '../Home/Card';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';



function SingleProduct() {
  const [movieInfo, setMovieInfo] = useState({})
  const [trailer, setTrailer] = useState()
  // console.log("movieInfo",movieInfo);
  let { id } = useParams();

  console.log(id);

  const API_KEY = '9b630d54f9503a9613dd2019e5cc7417';

  const fetchMovie = useCallback(async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos`)
    console.log('data', data);
    
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    // const json = await response.json()
    setMovieInfo(data)
  }, [id])

  useEffect(() => {
    window.scroll(0, 0)
    fetchMovie()
  }, [fetchMovie])
  console.log(movieInfo);


  // const navigate =useNavigate();
  // useEffect(() => {
  //   window.scroll(0,0)
  // 	const movies = JSON.parse(localStorage.getItem("popularMovies"));

  // 	console.log(movies);

  // 	console.log(id);

  // 		let data = movies.filter((movie) => movie.id == id)
  // 		if (!data) {

  // 			navigate("/")
  // 		}
  // 		console.log(data);
  // 		setMovieInfo(data[0])


  // }, [id])


  if (!movieInfo) {
    return (
      <section className="section details">
        <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
        <h1 style={{ color: 'white' }}> Not found </h1>
      </section>
    )
  }

  return (<div>
    <MovieInfo movieInfo={movieInfo} trailer={trailer} />
    <MovieDesc />
  </div>);

}
export default SingleProduct
