import React from 'react';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/test')
      .then(function (response) {
        console.log(response);
      });
  }

  render() {
    return <h1>Yo</h1> 
  }
}

export default App;
