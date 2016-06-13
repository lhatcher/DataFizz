import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './actions/userActions';

class App extends React.Component {

  componentDidMount() {
    // axios.post('http://localhost:3000/api/login', {
    //   username: 'lhatcher',
    //   password: 'password',
    // }).then(function (response) {
    //   console.log('------', response);
    // });
  }

  test() {
    this.props.login('lhatcher', 'password');
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.user} </h1> 
        <button onClick={this.test.bind(this)}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
