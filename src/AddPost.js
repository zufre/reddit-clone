import React, { Component } from "react";

export default class AddPost extends Component {
  render() {
    return (
      <div>
        <p>Title</p>
        <input
          onChange={event => this.setState({ title: event.target.value })}
        />
        <button
          style={{
            marginButtom: "15px",
            margin: "5px",
            backgroundColor: "lightblue"
          }}
          onClick={() => this.props.onAdd(this.state)}
        >
          Add
        </button>
      </div>
    );
  }
}
