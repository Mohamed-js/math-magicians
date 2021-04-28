import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import App from './components/App';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="main max-width">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/calculator" component={App} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
