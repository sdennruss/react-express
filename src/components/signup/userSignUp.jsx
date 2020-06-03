import React from "react";
import axios from "axios";

export function userSignUp(users) {
  return axios
    .post("http://localhost:5000/auth", users)
    .then((res) => {
      console.log("User Signed up");
    })
    .catch((error) => {
      console.log("This is an Error", error);
    });
}
