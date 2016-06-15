import React from 'react';

class Post extends React.Component {
  render() {
    let post = this.props.post;
    return (
      <div className="container">
        <div className="row">
          <div className="post-container">
            <div className="row">
              <div claName="col-md-6 text-left">
                Posted by: {post.author}
              </div>
              <div claName="col-md-6 text-right">
                {post.updatedAt}
              </div>
            </div>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Post;