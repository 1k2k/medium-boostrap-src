import React from "react";
import UpperGridBlock from "./UpperGridBlock";
import IntroBlock from "./IntroBlock";
import PostsBlock from "./PostsBlock";

class HomeCon extends React.Component {
  render() {
    return (
      <div>
        <UpperGridBlock />
        <IntroBlock />
        <PostsBlock />
      </div>
    );
  }
}

export default HomeCon;
