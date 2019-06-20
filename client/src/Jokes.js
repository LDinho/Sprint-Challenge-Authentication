import React, { Component } from "react";
import { withRouter } from 'react-router-dom';


import axios from './helpers/axiosConfig';

class Jokes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
    }

  }

  async componentDidMount() {

    try {
      const result = await axios.get('/jokes');

      this.setState({
        jokes: result.data,
      })

    }
    catch (err) {
      if (err.response.status === 403 || err.response.status === 401) {
        this.props.history.push('/login');

      } else {

        console.error(err);
      }

    }
  }

  render() {

    return (
      <>
        <h2 className="jokes">
          Jokes
        </h2>

        <ul className="jokes-list">
          {this.state.jokes.map((joke) => {

            return <li key={joke.id}> {joke.joke} </li>

          })}
        </ul>

      </>
    );
  }
}

export default withRouter(Jokes);
