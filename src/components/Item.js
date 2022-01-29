import React, { useCallback, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Spinner from "./Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false);
  const [url, setUrl] = useState([
    "https://api.themoviedb.org/3/discover/movie/?api_key=9606e1ee79f0790f74055bff62a6f113&page=1",
  ]);
  const fetchProducts = useCallback(async () => {
    setLoading(true)
    const { data } = await axios.get(url);
    setProducts(data.results);
    setLoading(false)
  }, [url]);
 

  useEffect(() => {
    window.scrollTo(0,0);
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  const [tvs, settvs] = useState([]);
  const [url2, setUrl2] = useState([
    "https://api.themoviedb.org/3/discover/tv/?api_key=9606e1ee79f0790f74055bff62a6f113",
  ]);
  const fetchTVs = useCallback(async () => {
    const { data } = await axios.get(url2);
    console.log(data);
    // const json = await response.json()
    settvs(data.results);
  }, [url2]);

  useEffect(() => {
    fetchTVs();
  }, [fetchTVs]);
  //    const {data :trips , isPending} = useFetch(url)
  console.log(tvs);


  return (    
    <div className="">
          <section class="section section--first section--bg" data-bg="img/section/section.jpg">
          {loading?<Spinner displaySection={'display__section'}/>:null}
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="section__wrap">
						
						<h2 class="section__title">Store</h2>
						

						
						<ul class="breadcrumb">
							<li class="breadcrumb__item"><a href="#">Home</a></li>
							<li class="breadcrumb__item breadcrumb__item--active">Store</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
	</section>

     
      {!loading ? ( 
      <div className="catalog" >
        <div className="container">
          <div className="row ">
            <div className="col-12 ">
              <p> Welcom To Our Movies Store </p>
              <br />
              <br />
              <h1 className="section__title">MOVIES SECTION</h1>
            </div>

        
         
            
            
            
            {
            products &&
              products.map((product) => (
                <div className="col-6 col-sm-12 col-lg-6">
                  <div className="card hide-pagination card--list">
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <div className="card__cover">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
                            alt=""
                          />
                          <a href="#" className="card__play">
                            <i className="icon ion-ios-play"></i>
                          </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-8">
                        <div className="card__content">
                          <h3 className="card__title">
                            <a href="#">{product.original_title}</a>
                          </h3>
                          <span className="card__category">
                            <a href="#">Action</a>
                            <a href="#">Triler</a>
                          </span>

                          <div className="card__wrap">
                            <span className="card__rate">
                              <i className="icon ion-ios-star"></i>
                              {product.vote_average}
                            </span>

                            <ul className="card__list">
                              <li>HD</li>
                              <li>16+</li>
                            </ul>
                          </div>

                          <div className="card__description">
                            <p>{product.overview}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-12">
              <ul className=" paginator paginator--list">
                <li className="paginator__item paginator__item--prev">
                  <a href="#">
                    <i class="icon ion-ios-arrow-back"></i>
                  </a>
                </li>
                <li className="paginator__item paginator__item--active">
                  <a href="">1</a>
                </li>
                <li className="paginator__item ">
                  <a href="">2</a>
                </li>
                <li className="paginator__item">
                  <a href="#">3</a>
                </li>
                <li className="paginator__item">
                  <a href="#">4</a>
                </li>
                <li className="paginator__item paginator__item--next">
                  <a href="#">
                    <i className="icon ion-ios-arrow-forward"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-8 col-lg-12">
              <div className="card card--list">
                <div className="row">
                  <section
                    className="section section--bg"
                    data-bg="img/section/section.jpg"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="section__title">TV SECTION</h2>
                        </div>
                        {/* {loading?<Spinner/>:null} */}
                        {tvs &&
                          tvs.map((tv) => (
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                              <div className="card">
                                <div className="card__cover">
                                  <img
                                    src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                                    alt=""
                                  />
                                  <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                  </a>
                                </div>
                                <div className="card__content">
                                  <h3 className="card__title">
                                    <a href="#">{tv.original_title}</a>
                                  </h3>
                                  <span className="card__category">
                                    <a href="#">Action</a>
                                    <a href="#">Triler</a>
                                  </span>
                                  <span className="card__rate">
                                    <i className="icon ion-ios-star"></i>
                                    {tv.vote_average}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ) :""  }
    </div>
  );
}

export default Products;
