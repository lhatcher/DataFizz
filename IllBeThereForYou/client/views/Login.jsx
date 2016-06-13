import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { login } from './actions/userActions';


class Login extends React.Component {

  authenticate() {

  }

  render() {
    return (
      <div className="container">
        <h1>Login View</h1>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
  }, dispatch);
};

export default Login;