import React from 'react';

import Header from "./Header"
import Body from "./Body"

export default class Layout extends React.Component {


  render() {
    return (
      <div className = "Layout">
        <Header />
        <Body />
      </div>
    );
  }
}
