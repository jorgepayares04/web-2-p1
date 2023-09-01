import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Content from './components/Content';
import Create from './components/Create';
import { SportProvider } from './components/SportContext';

const App = () => {
  return (
    <SportProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/content" component={Content} />
          <Route path="/create" component={Create} />
        </Switch>
        <Footer />
      </Router>
    </SportProvider>
  );
};

export default App;
