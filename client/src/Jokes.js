import React, { Component } from "react";

class Jokes extends Component {

  componentDidMount() {
    console.log('hello');

  }

  render() {

    return (
      <>
        <div className="jokes-list">
          Jokes
        </div>
      </>
    );
  }
}

export default Jokes;
