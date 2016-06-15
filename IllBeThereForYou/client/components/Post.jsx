import React from 'react';
import AddFriend from './AddFriend';

class Post extends React.Component {
  render() {
    let post = this.props.post;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="post-container">
            <div className="row">
              <div className="col-md-6 text-left">
                Posted by: {post.author}
              </div>
              <div className="col-md-6 text-right">
                {post.updatedAt}
              </div>
            </div>
            <p>{post.content}</p>
            <AddFriend friend={post.author} />
          </div>
        </div>
      </div>
    );
  }
};

export default Post;