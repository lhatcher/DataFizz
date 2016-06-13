import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
// import { pushState } from 'redux-router';

export const requireAuth = (Component) => {

  class AuthComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();  
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(); 
    }

    checkAuth() {
      if (!this.props.user.success) {
        hashHistory.push('/login');
        // let redirectAfterLogin = this.props.location.pathname;
        // this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
      }
    }

    render() {
      return (
        <div>
          {this.props.user.success ? <Component {...this.props}/> : null}
        </div>
      );
    }
  };

  const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated: state.user.success,
  });

  return connect(mapStateToProps)(AuthComponent);
};


