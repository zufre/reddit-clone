import React, { Component } from "react";

import "./App.css";
import RedditPost from "./RedditPost";
import AddPost from "./AddPost";
import moment from "moment";
import _ from "lodash";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditPosts: {}
    };
    firebase
      .database()
      .ref("posts")
      .on("value", snapshot => {
        this.setState({ redditPosts: snapshot.val() });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Reddit Clone</h1>
        <h4>Exercise in React to interact with the Firebase DB</h4>
        <br />
        <AddPost
          onAdd={redditPost => {
            const newRedditPost = {
              ...redditPost,
              comments: 0,
              submitted: moment().format()
            };
            firebase
              .database()
              .ref("posts")
              .push(newRedditPost);
          }}
        />
        {_.map(this.state.redditPosts, redditPost => {
          return (
            <RedditPost
              key={redditPost.title}
              title={redditPost.title}
              comments={redditPost.comments}
              submitted={redditPost.submitted}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
