import React, { Component } from 'react';

class Product extends Component {
    
    render() { 
       
        return (
                <div className="item">
            <div className="card card--big">
              <div className="card__cover">
                <img src={this.props.image} alt="" />
                <a href="#" className="card__play">
                  <i className="icon ion-ios-play"></i>
                </a>
              </div>
              <div className="card__content">
                <h3 className="card__title">
                  <a href="#">{this.props.title}</a>
                </h3>
                <span className="card__category">
                  <a href="#">{this.props.category}</a>
                
                </span>
                <span className="card__rate">
                  <i className="icon ion-ios-star"></i>{this.props.rating}
                </span>
              </div>
            </div>
          </div>
        );
    }

}
 
export default Product;
