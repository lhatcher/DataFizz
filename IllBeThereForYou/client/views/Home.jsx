import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../actions/getPosts';

import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';
import Feed from '../components/Feed';
import FriendList from '../components/FriendList';

require('../styles/style.css');

class Home extends React.Component {

  componentWillMount() {
    this.props.loadPosts();
  }

  render() {
    let firstName = this.props.user.firstName;
    let username = this.props.user.username;
    return (
      <div>
        <Navbar username={username} firstName={firstName} />
        <div className="container">
          <div className="row">
            <h3>Welcome, {firstName}. </h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-md-offset-2">
                <FriendList />
                <p>Steve</p>
                <p>Bill</p>
                <p>Fred</p>
                <p>Sarah</p>
                <p>Jeb</p>
                <p>Will</p>
              </div>
              <div className="col-md-6">
                <PostForm />
                <Feed {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPosts: getPosts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);



