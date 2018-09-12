import React from "react";
import PostViewHeaderCon from "./PostViewHeaderCon";
import PostArticleContent from "./PostArticleContent";
import PostViewFooter from "./PostViewFooter";

class PostViewCon extends React.Component {
  render() {
    return (
      <main role="main">
        <article ref={this.props.postViewRef}>
          <PostViewHeaderCon />
          <PostArticleContent />
          <PostViewFooter />
        </article>
      </main>
    );
  }
}

export default PostViewCon;
