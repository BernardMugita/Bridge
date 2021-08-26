import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Artists from './pages/Artists';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Artists" exact component={Artists} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Login" exact component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
