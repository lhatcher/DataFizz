import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Signup from './Signup';  
import Home from './Home';  
import { login } from '../actions/userActions';

require('../styles/style.css');

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.success ? <Home /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(App);