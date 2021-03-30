import logo from './logo.svg';
import './App.css';
import HomePage from '.components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Forms from './components/Forms';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
        <Route path="/" exact component={ HomePage }/>
        <Route path="/about" component={ About }/>
        <Route path="/portfolio" component={ Portfolio }/>
        <Route path="/contact" component={ Contact }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
