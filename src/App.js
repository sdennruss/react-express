import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUpForm from "./components/signup/signUp";
import NavBar from "./components/navigation/navbar";
import About from "./components/about/about";
import Home from "./components/home/home";
import Connect from "./components/connect/connect";
import SignUpMain from "./components/signup/signUpMain";
import NotFound from "./components/notFound/notfound";
import axios from "axios";
import "./App.css";
import EBook from "./components/signup/ebook";

class App extends Component {
  state = {
    navigations: ["tse", "about", "connect", "signup"],
    account: { name: "", email: "", birthYear: "" },
    errors: {},
    departures: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/tse")
      .then((res) => res.json())
      .then((departures) => this.setState({ departures }));
  }

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.name.trim() === "") errors.name = "Your name is required";

    if (!account.email.trim().includes("@"))
      errors.email = "A valid email address is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email } = this.state.account;

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("Submitted");

    const users = { name, email };
    axios
      .post("http://localhost:5000/users", users)
      .then((res) => {
        console.log("book created");
      })
      .catch((error) => {
        console.log("This is an Error", error);
      });
  };

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Your name is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { navigations, account, errors, departures } = this.state;
    return (
      <React.Fragment>
        <NavBar navigations={navigations} />
        <div className="routing">
          <Switch>
            <Route
              path="/tse"
              render={(props) => <Home departures={departures} {...props} />}
            />
            <Route path="/about" component={About} />
            <Route path="/connect" component={Connect} />
            <Route path="/signup" component={SignUpMain} />
            <Route path="/ebook" component={EBook} />
            <Route path="/notfound" component={NotFound} />
            <Route
              path="/"
              exact
              render={(props) => <Home departures={departures} {...props} />}
            />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <SignUpForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          account={account}
          errors={errors}
        />
      </React.Fragment>
    );
  }
}

export default App;
