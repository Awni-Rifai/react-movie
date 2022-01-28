import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../courselOptions";
import Product from "./Home/Product";
import Card from "./Home/Card";
import SingleCard from "./Home/SingleCard";
import Partner from "./Home/Partner";

export default class Home extends Component {
    
  render() {

    return (
      <div>
        <section class="home home--bg">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="home__title">
                  <b>NEW ITEMS</b> OF THIS SEASON
                </h1>
              </div>
              <div className="col-12">
                <div className="home__carousel">
                  <OwlCarousel
                    items={5}
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    {...options}
                  >
                    <Product
                      title="I Dream in Another Language"
                      image="img/covers/cover.jpg"
                      category="Action, Triller"
                      rating="8.4"
                    />
                    <Product
                      title="Benched"
                      image="img/covers/cover2.jpg"
                      category="Comedy"
                      rating="7.1"
                    />
                    <Product
                      title="Whitney"
                      image="img/covers/cover3.jpg"
                      category="Action, Triller"
                      rating="8.4"
                    />
                    <Product
                      title="Blindspotting"
                      image="img/covers/cover4.jpg"
                      category="Romance, Drama"
                      rating="6.3"
                    />
                    <Product
                      title="I Dream in Another Language"
                      image="img/covers/cover5.jpg"
                      category="Action, Triller"
                      rating="8.4"
                    />
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="content">
          <div class="content__head">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  {/* <!-- content title --> */}
                  <h2 class="content__title">New items</h2>
                 
                  {/* <!-- end content title -->

						<!-- content tabs nav --> */}
                  <ul
                    class="nav nav-tabs content__tabs"
                    id="content__tabs"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#tab-1"
                        role="tab"
                        aria-controls="tab-1"
                        aria-selected="true"
                      >
                        NEW RELEASES
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#tab-2"
                        role="tab"
                        aria-controls="tab-2"
                        aria-selected="false"
                      >
                        MOVIES
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#tab-3"
                        role="tab"
                        aria-controls="tab-3"
                        aria-selected="false"
                      >
                        TV SERIES
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#tab-4"
                        role="tab"
                        aria-controls="tab-4"
                        aria-selected="false"
                      >
                        CARTOONS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            {/* <!-- content tabs --> */}
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="1-tab"
              >
                <div class="row">
                  {/* <!-- card --> */}
                  <Card
                    title="I Dream in Another Language"
                    image="img/covers/cover5.jpg"
                    category="Action, Triller"
                    rating="8.4"
                    desc="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"
                  />
                  <Card
                    title="Benched"
                    image="img/covers/cover2.jpg"
                    category="Comedy"
                    rating="7.1"
                    desc="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"
                  />
                  <Card
                    title="Whitney"
                    image="img/covers/cover3.jpg"
                    category="Comedy,Drama,Music"
                    rating="6.4"
                    desc="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"
                  />
                  <Card
                    title="Blindspotting"
                    image="img/covers/cover4.jpg"
                    category="Comedy, Drama"
                    rating="7.9"
                    desc="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"
                  />
                  <Card
                    title="I Dream in Another Language"
                    image="img/covers/cover5.jpg"
                    category="Action, Triller"
                    rating="8.4"
                    desc="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"
                  />
                  <Card
                    title="Benched"
                    image="img/covers/cover6.jpg"
                    category="Comedy"
                    rating="7.1"
                    desc="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"
                  />
                  {/* <!-- end card --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section--bg" data-bg="img/section/section.jpg">
          <div class="container">
            <div class="row">
              {/* <!-- section title --> */}
              <div class="col-12">
                <h2 class="section__title">Expected premiere</h2>
              </div>
              {/* <!-- end section title --> */}
              <SingleCard
                title="I Dream in Another Language"
                image="img/covers/cover.jpg"
                category="Action, Triller"
                rating="8.4"
              />
              <SingleCard
                title="Benched"
                image="img/covers/cover2.jpg"
                category="Comedy"
                rating="7.1"
              />
              <SingleCard
                title="Whitney"
                image="img/covers/cover3.jpg"
                category="Action, Triller"
                rating="8.4"
              />
              <SingleCard
                title="Blindspotting"
                image="img/covers/cover4.jpg"
                category="Romance, Drama"
                rating="6.3"
              />
              <SingleCard
                title="I Dream in Another Language"
                image="img/covers/cover5.jpg"
                category="Action, Triller"
                rating="8.4"
              />
              <SingleCard
                title="Benched"
                image="img/covers/cover6.jpg"
                category="Comedy"
                rating="7.1"
              />

              {/* <!-- section btn --> */}
              {/* <div class="col-12">
					<a href="#" class="section__btn">Show more</a>
				</div> */}
              {/* <!-- end section btn --> */}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="section__title section__title--no-margin">
                  Our Partners
                </h2>
              </div>

              <div class="col-12">
                <p class="section__text section__text--last-with-margin">
                  It is a long <b>established</b> fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using.
                </p>
              </div>
      
              <Partner image="img/partners/3docean-light-background.png" />
              <Partner image="img/partners/activeden-light-background.png" />
              <Partner image="img/partners/audiojungle-light-background.png" />
              <Partner image="img/partners/codecanyon-light-background.png" />
              <Partner image="img/partners/photodune-light-background.png" />
              <Partner image="img/partners/themeforest-light-background.png" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
