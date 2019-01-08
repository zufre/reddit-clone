import React, { Component } from "react";

export default class AddPost extends Component {
  render() {
    return (
      <div style={{ marginButtom: "15px" }}>
        <p>Title</p>
        <input
          onChange={event => this.setState({ title: event.target.value })}
        />
        <button
          style={{
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
