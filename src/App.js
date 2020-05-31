import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import Submission from './components/Submission';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/todo" component={ Todo } />
          <Route path="/:submission_id" component={ Submission } />
          </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
