validate = () => {
  const errors = {};
  const { data } = this.state;

  if (data.name.trim() === "") errors.name = "Your name is required";

  if (!data.email.trim().includes("@"))
    errors.email = "A valid email address is required";

  return Object.keys(errors).length === 0 ? null : errors;
};

validateProperty = ({ name, value }) => {
  const { email } = this.state.data;
  if (name === "name") {
    if (value.trim() === "") return "Your name is required";
  }
};

handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email } = this.state.data;

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

handleChange = ({ currentTarget: input }) => {
  const errors = { ...this.state.errors };
  const errorMessage = this.validateProperty(input);

  if (errorMessage) errors[input.name] = errorMessage;
  else delete errors[input.name];

  const data = { ...this.state.data };
  data[input.name] = input.value;
  this.setState({ data, errors });
};
