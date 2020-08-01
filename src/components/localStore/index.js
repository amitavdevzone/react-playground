import React, { Component } from "react";

const localStore = (WrapperComponent) => {
  class HOC extends Component {
    render() {
      return <WrapperComponent />;
    }
  }

  return HOC;
};

export default localStore;
