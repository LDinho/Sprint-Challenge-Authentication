import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import axios from './helpers/axiosConfig';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.defaultState = this.state;

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {username, password} = this.state;

    try {

      const result = await axios.post('/register', {
        username,
        password,
      });

      this.props.history.push('/jokes');

      console.log(result);

    }
    catch (err) {
      console.error(err);

    }

    this.setState({
      ...this.defaultState,

    })
  }

  render() {

    return (
      <>
        <h3 className="sign-up">
          Sign Up
        </h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 name="username"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.handleChange}
          />
          <input type="password"
                 name="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleChange}
          />

          <button type="submit">Sign up</button>
        </form>
      </>
    );
  }
}

export default withRouter(SignUp);
