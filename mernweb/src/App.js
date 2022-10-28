import './App.css';


import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router,  Switch, Route }
from 'react-router-dom';


function App() {
  return (
    <Router>
   <div>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    </Switch>
   </div>
   </Router>
  );
}

export default App;
