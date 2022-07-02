import React from "react";
const axios = require("axios");
let trigger = (e) => {
  e.preventDefault();
  console.log(e.target.fname.value);
  axios
    .post("https://limitless-mountain-19309.herokuapp.com/", {
      fName: "Fred",
      lName: "Flintstone",
      email: "pwn0x80@gmail.com",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default function test() {
  return (
    <div>
      <form onSubmit={trigger}>
        <label typeof="fname">
          <br />
          First Name
          <br />
          <input id="fname" type="text" />
        </label>
        <label typeof="lname">
          <br />
          Last Name
          <br />
          <input id="lname" type="text" />
        </label>
        <label typeof="email">
          <br />
          Email
          <br />
          <input id="email" type="text" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
