import './App.css';
import Login from './components/userAuthorization/Login';
import Register from './components/userAuthorization/Register';
import Home from './components/Home';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/login" element={ <Login/>}/>
        <Route exact path="/register" element={ <Register/>}/>
        <Route exact path="/" element={ <Home/>}/>
        
     
     
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
