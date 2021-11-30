import { Component } from "react";
import * as React from "react";

export class DomTraversal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // expandedId: false,
      // // isVisible: false,
      // offsetTop: 0,
    };
  }

  buttClick() {
    const html = document.documentElement;
    const h1 = html.getElementsByTagName("h1")[0];
    console.log("2 ", h1);
    const p = document.getElementsByTagName("p")[0];
    console.log("3 ", p);
    const ul = document.getElementsByTagName("ul")[0];
    console.log("4 ", ul);
    const ulKidz = ul.childNodes;
    console.log("5 ", ulKidz);
    ul.firstElementChild.style.background = "yellow";
  }

  render() {
    return (
      <html lang="en">
        <head>
          <title>Learning About Nodes</title>
        </head>

        <body>
          <button type="submit" onClick={this.buttClick}>
            Refresh Page
          </button>
          <br />
          <h1>Shark World</h1>
          <h2 id="app">app</h2>
          <p>
            The world's leading source on <strong>shark</strong> related
            information.
          </p>
          <h2>Types of Sharks</h2>
          <ul>
            <li>Hammerhead</li>
            <li>Tiger</li>
            <li>Great White</li>
          </ul>
        </body>
      </html>
    );
  }
}

DomTraversal.propTypes = {};

DomTraversal.defaultProps = {};

export default DomTraversal;
