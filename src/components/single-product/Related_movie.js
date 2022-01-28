import React, { Component } from 'react';

export default class Related_movie extends Component {
  render() {
    return (
        <div className="col-12 col-lg-4 col-xl-4">
        <div className="row">
            {/* <!-- section title --> */}
            <div className="col-12">
                <h2 className="section__title section__title--sidebar">You may also like...</h2>
            </div>
            {/* <!-- end section title --> */}

            {/* <!-- card --> */}
            <div className="col-6 col-sm-4 col-lg-6">
                <div className="card">
                    <div className="card__cover">
                        <img src="img/covers/cover.jpg" alt="" />
                        <a href="#" className="card__play">
                            <i className="icon ion-ios-play"></i>
                        </a>
                    </div>
                    <div className="card__content">
                        <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                        <span className="card__category">
                            <a href="#">Action</a>
                            <a href="#">Triler</a>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                    </div>
                </div>
            </div>
            {/* <!-- end card --> */}

         

           

          

           
         
            {/* <!-- end card --> */}
        </div>
    </div>
    );
  }
}
