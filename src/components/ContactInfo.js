import React, { Component } from "react";
import CountryOptions from './input_options/countryOptions';
import {  Col, Row,  FormGroup  } from "reactstrap";

import StateOptions from './input_options/stateOptions';
export default class ContactInfo extends Component {
  state = {
    firstname: '',
	lastname:'',
    email:'',
	country:'',
    phone:'',
    state:''
	

  };
  chekout=(e)=>{
	e.preventDefault();

}
  render() {
    return (
      <div className="sign section--bg" data-bg="img/section/section.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src="img/logo.svg" alt="" />
                  </a>
                  <Row>	
                     <Col md={6}>
                  <div className="sign__group">
                    <input
                      value={this.state.firstname}
                      onChange={(e) => this.setState({ firstname: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Fisrt Name"
                    />
                  </div>
                  </Col>
                     <Col md={6}>
                  <div className="sign__group">
                    <input
                      value={this.state.lastname}
                      onChange={(e) => this.setState({ lastname: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Last Name"
                    />
                  </div>
                  </Col>
                        </Row>
                        <Row>		
                         	<Col md={6}>
                  <div className="sign__group">
                    <input
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div></Col>
                     <Col md={6}>
                  <div className="sign__group">
                    <input
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Phone"
                    />
                  </div>
                  </Col>
                        </Row>
                  <Row form>
                     <Row>		
                         	<Col md={6}>
									<FormGroup className="dropdown-container">
										<CountryOptions />
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup className="dropdown-container ">
										<StateOptions />
									</FormGroup>
								</Col>
                        </Row>

					
							</Row>
						
							<button type="button" onClick={this.chekout} className="sign__btn" >
							CheckOut                
							</button>
                        
                </form>
			
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
