import './App.css';
import Login from './components/userAuthorization/Login';
import Register from './components/userAuthorization/Register';
import Home from './components/Home';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import SingleProduct from './components/single-product/SingleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        /**put navbar here */
        <Routes>
        <Route exact path="/login" element={ <Login/>}/>
        <Route exact path="/register" element={ <Register/>}/>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/movie" element={ <SingleProduct/>}/>
        
     
     
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
