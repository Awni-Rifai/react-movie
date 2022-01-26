import './App.css';
import Login from './components/userAuthorization/Login';
import Register from './components/userAuthorization/Register';
import Home from './components/Home';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        /**put navbar here */
        <Routes>
        <Route exact path="/login" element={ <Login/>}/>
        <Route exact path="/register" element={ <Register/>}/>
        <Route exact path="/" element={ <Home/>}/>
        
     
     
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
