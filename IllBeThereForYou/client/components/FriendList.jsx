import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FriendList extends React.Component {
  render() {
    return <h5>FriendList View</h5>
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(FriendList);