import './App.css';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import TopNav from './components/TopNav';
import BotNav from './components/BotNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <TopNav />
        </header>
        <Switch>
        <Route path="/" exact component={ Portfolio }/>
        <Route path="/about" exact component={ About }/>
        <Route path="/portfolio" exact component={ Portfolio }/>
        <Route path="/contact" exact component={ Contact }/>
        </Switch>
        <footer>
          <BotNav />
        </footer>
      </div>
    </Router>
  );
}

export default App;
