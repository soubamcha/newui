import React, { Component } from 'react';
import Header from "./components/Header"
// import Button from '@material-ui/core/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <Header />
      // <div className="App">
      //     <Button variant="contained" size="small" color="secondarycab">
      //       Hello World
      //     </Button>
      //     <Button variant="contained" size="medium" color="secondarycab">
      //       Hello World
      //     </Button>
      //     <Button variant="contained" size="large" color="secondarycab">
      //       Hello World
      //     </Button>
      // </div>
    );
  }
}

export default App;
