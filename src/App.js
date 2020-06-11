import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navigation/navbar";
import About from "./components/about/about";
import Home from "./components/home/home";
import Connect from "./components/connect/connect";
import SignUpMain from "./components/signup/signUpMain";
import NotFound from "./components/notFound/notfound";
import "./App.css";
import Toggle from "./components/common/toggle";
import MediaQuery from "react-responsive";
import Joi from "joi";
import EBook from "./components/signup/ebook";
import CheckOut from "./components/checkout/checkout";
import RegisterForm from "./components/register/register";
import { userCreated } from "./components/register/userCreated";
import http from "./components/httpServices/httpServices";

class App extends Component {
  state = {
    navigations: ["tse", "about", "connect", "signup"],
    data: { name: "", email: "" },
    errors: {},
    departures: [],
    isAuthenticated: false,
    newUsers: [],
    eventId: null,
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email({ minDomainAtoms: 2 }).label("Email"),
  };

  async componentDidMount() {
    const { data: departures } = await http.get("/tse");
    this.setState({ departures });

    const { data: newUsers } = await http.get("/users");
    this.setState({ newUsers });
    console.log(newUsers);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    this.doSubmit();
  };

  doSubmit = async () => {
    const { name, email } = this.state.data;
    const users = { name, email };

    await userCreated(users);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handlePurchase = (Auth) => {
    this.setState({ isAuthenticated: Auth });
    console.log(Auth);
  };

  render() {
    const {
      navigations,
      data,
      errors,
      departures,
      isAuthenticated,
    } = this.state;
    return (
      <React.Fragment>
        <Toggle navigations={navigations} />
        <MediaQuery minDeviceWidth={769}>
          <NavBar navigations={navigations} />
        </MediaQuery>
        <div className="routing">
          <Switch>
            <Route
              path="/tse"
              render={(props) => (
                <Home
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  onValidation={this.validate}
                  data={data}
                  errors={errors}
                  departures={departures}
                  {...props}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/connect" component={Connect} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/signup" component={SignUpMain} />
            <Route
              path="/ebook"
              render={(props) => (
                <EBook
                  isAuthenticated={isAuthenticated}
                  onPurchase={() => this.handlePurchase(!isAuthenticated)}
                  {...props}
                />
              )}
            />
            <Route path="/checkout" component={CheckOut} />

            <Route path="/notfound" component={NotFound} />
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  onValidation={this.validate}
                  data={data}
                  errors={errors}
                  departures={departures}
                  {...props}
                />
              )}
            />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
