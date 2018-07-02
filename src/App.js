import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from 'shared/components/menu';
import Main from 'shared/components/main';
import Footer from 'shared/components/footer';
import Top from 'shared/components/top';

import 'App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body-page">
            <Menu/>
            <Top/>
            <Main/>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
