import React, { Component } from "react";
import CakeContainer from "./components/cakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import UserContainer from "./components/userContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <CakeContainer />
        <IceCreamContainer />
        <UserContainer />
      </div>
    );
  }
}
