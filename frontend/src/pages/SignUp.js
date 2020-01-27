import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
import { register } from '../components/UserFunctions.js'
import axios from 'axios'


class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      password: this.state.password
    }

    register(newUser)
    .then(res => {
      this.props.history.push('/Login')
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Name</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;

// function Signup() {
//   return (
//     <Card>
//       <Form method="POST" action="/user">
//         <Input type="email" placeholder="email" />
//         <Input type="password" placeholder="password" />
//         <Input type="password" placeholder="password again" />
//         <Button>Sign Up</Button>
//       </Form>
//       <Link to="/login">Already have an account?</Link>
//     </Card>
//   );
// }
