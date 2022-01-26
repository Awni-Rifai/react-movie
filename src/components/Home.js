import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../courselOptions";

export default class Home extends Component {
    
  render() {
    return (
        <section class="home home--bg">
        <div class="container">
        <div class="row">
        <div class="col-12">
        <h1 class="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

    </div>
        <div className="col-12">
        <div className="home__carousel">
      <OwlCarousel items={4} className="owl-theme" loop margin={10} nav {...options} >
     
          <div class="item">
            <div class="card card--big">
              <div class="card__cover">
                <img src="img/covers/cover.jpg" alt="" />
                <a href="#" class="card__play">
                  <i class="icon ion-ios-play"></i>
                </a>
              </div>
              <div class="card__content">
                <h3 class="card__title">
                  <a href="#">I Dream in Another Language</a>
                </h3>
                <span class="card__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
                <span class="card__rate">
                  <i class="icon ion-ios-star"></i>8.4
                </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card card--big">
              <div class="card__cover">
                <img src="img/covers/cover.jpg" alt="" />
                <a href="#" class="card__play">
                  <i class="icon ion-ios-play"></i>
                </a>
              </div>
              <div class="card__content">
                <h3 class="card__title">
                  <a href="#">I Dream in Another Language</a>
                </h3>
                <span class="card__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
                <span class="card__rate">
                  <i class="icon ion-ios-star"></i>8.4
                </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card card--big">
              <div class="card__cover">
                <img src="img/covers/cover.jpg" alt="" />
                <a href="#" class="card__play">
                  <i class="icon ion-ios-play"></i>
                </a>
              </div>
              <div class="card__content">
                <h3 class="card__title">
                  <a href="#">I Dream in Another Language</a>
                </h3>
                <span class="card__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
                <span class="card__rate">
                  <i class="icon ion-ios-star"></i>8.4
                </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card card--big">
              <div class="card__cover">
                <img src="img/covers/cover.jpg" alt="" />
                <a href="#" class="card__play">
                  <i class="icon ion-ios-play"></i>
                </a>
              </div>
              <div class="card__content">
                <h3 class="card__title">
                  <a href="#">I Dream in Another Language</a>
                </h3>
                <span class="card__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
                <span class="card__rate">
                  <i class="icon ion-ios-star"></i>8.4
                </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card card--big">
              <div class="card__cover">
                <img src="img/covers/cover.jpg" alt="" />
                <a href="#" class="card__play">
                  <i class="icon ion-ios-play"></i>
                </a>
              </div>
              <div class="card__content">
                <h3 class="card__title">
                  <a href="#">I Dream in Another Language</a>
                </h3>
                <span class="card__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
                <span class="card__rate">
                  <i class="icon ion-ios-star"></i>8.4
                </span>
              </div>
            </div>
          </div>
         
      </OwlCarousel>
      </div>
      </div>
      </div>
      </div>
      
      
      </section>
    );
  }
}
