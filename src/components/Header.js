import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// import './App.css';

class Header extends Component {
//   render() {
    return (
      <div>
          <Button variant="contained" size="small" color="secondarycab">
            Hello World
          </Button>
          <Button variant="contained" size="medium" color="secondarycab">
            Hello World
          </Button>
          <Button variant="contained" size="large" color="secondarycab">
            Hello World
          </Button>
      </div>
    );
//   }
}

export default Header;