import React, { Component } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import * as validate from '../../validate';
import Spinner from "../Spinner";
import { loadScripts } from "../../loadScripts";
import Error from "../Error";
import './sectionBackground.css'
import Helmet from "react-helmet";
export default class Register extends Component {
 
  state = {
    name: "",
    email: "",
    password: "",
    error:{body:"",email:"",password:""},
    loading:false
  };
  componentDidMount(){
    window.scrollTo(0,0);
  }
  renderError=(message)=>{
    
    if(message.startsWith('Email'))this.setState(prevState=>{
      return {error:{...prevState.error,email:message}}
    });
    else if(message.startsWith('Password'))this.setState(prevState=>{
      return {error:{...prevState.error,password:message}};
    });
    else this.setState(prevState=>{
      return {error:{...prevState.error,body:message}};
    });
  
    

    
  } 
  
   registerUser=async(email,password)=> {
      try{
        await createUserWithEmailAndPassword(auth,email,password);
        this.setState({error:{body:"",email:"",password:""}})

      }

      catch(err){
        this.setState({loading:false});
        const error=err.code.split('/')
        this.renderError(error[1]);
        

      }
 
}


validateUser=()=>{
  try{
    //validate empty
  validate.validateEmail(this.state.email);
  //empty error if email is valid
  
  this.setState({error:{...this.state.error,email:''}});
  //password validation
  validate.validatePassword(this.state.password);
  //empty error
  this.setState({error:{...this.state.error,password:''}});
  return true;

  }
  catch(error){
    this.setState({loading:false});
    this.renderError(error.message);

  }
}

  register=(e)=>{
    this.setState({loading:true})
	  e.preventDefault();
    if(this.validateUser()){
    this.registerUser(this.state.email,this.state.password);
      
    

    
    
  }
    
  }
  signIn=(e)=>{
	  e.preventDefault();
 
	  // go to register page

  }
  render() {
    return (
      <>
      <Helmet>
      <script  src="%PUBLIC_URL%/js/bootstrap.bundle.min.js"></script>
      </Helmet>
      <div className="sign section--bg" data-bg="img/section/section.jpg">
        <div className="container">
          <div className="row">
            
            <div className="col-12">
            
              <div className="sign__content">
             
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src="img/logo.svg" alt="" />
                  </a>

                  {/* <div className="sign__group">
                    <input
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Name"
                    />
                  </div> */}

                  <div className="sign__group">
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      className="sign__input"
                      placeholder="Email"
                    />
                    <Error error={this.state.error.email}/>
                  </div>

                  <div className="sign__group">
                    <input
                      
                      type="password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      className="sign__input"
                      placeholder="Password"
                    />
                      
                  </div>
                  <Error error={this.state.error.password}/>
                
                  <Error error={this.state.error.body}/>
                
                  
                

                

                  <button onClick={this.register} className="sign__btn" type="button">
                    Sign up
                  </button>
                
                 {this.state.loading? <Spinner/>:null}
             
                 


                  <span className="sign__text">
                    Already have an account? <a onClick={this.signIn}>Sign in!</a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
