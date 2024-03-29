import axios from "axios";
import React, { Component } from "react";

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://www.visitamsterdamcity.com/wp-json/wp/v2/posts/")
      .then((res) =>
        this.setState({
          posts: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { posts, isLoaded } = this.state;
    return (
      <div>
        {posts.map((post) => (
          <>
            <h4>{post.title.rendered}</h4>
            <p>{post.content.rendered.replace(/<[^>]*>?/gm, "")}</p>
          </>
        ))}
      </div>
    );
  }
}
export default Posts;
