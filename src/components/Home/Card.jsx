import React, { Component } from 'react';

class Card extends Component {
    state = {  } 
    render() { 
        return (
            			<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={this.props.image} alt=""/>
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">{this.props.title}</a></h3>
											<span className="card__category">
												<a href="#">{this.props.category}</a>
										
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>{this.props.rating}</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>{this.props.desc}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
        );
    }
}
 
export default Card;
	