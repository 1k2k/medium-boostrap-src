import React from "react";
import PostActions from "./PostActions";
import PostAuthor from "./PostAuthor";
import PostCardGrid from "./PostCardGrid";
import PostComments from "./PostComments";

class PostViewFooter extends React.Component {
  render() {
    return (
      <div>
      <footer className="pt-1">
        <PostActions />
        <PostAuthor />
        <PostCardGrid />
        <PostComments />
      </footer>
      </div>
    );
  }
}

export default PostViewFooter;
