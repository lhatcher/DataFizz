import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import Signup from './Signup';  
import Feed from './Feed';  
import { login } from '../actions/userActions';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.success ? <Feed /> : <Login />}
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
// <div>
//   <h1>Hello, {this.props.user.username} </h1>
//   <p> {this.props.user.firstName}, {this.props.user.lastName} </p> 
//   <button onClick={this.test.bind(this)}>Login</button>
// </div>