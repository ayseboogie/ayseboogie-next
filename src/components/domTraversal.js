import { Component } from "react";
import * as React from "react";

export class DomTraversal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  buttClick() {
    const html = document.documentElement;

    console.log("0 ", html);

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
    const tree = {
      id: 1,
      label: "A",
      child: [
        {
          id: 2,
          label: "B",
          child: [
            { id: 5, label: "E", child: [] },
            { id: 6, label: "F", child: [] },
            {
              id: 7,
              label: "G",
              child: [],
            },
          ],
        },
        { id: 3, label: "C", child: [] },
        {
          id: 4,
          label: "D",
          child: [
            { id: 8, label: "H", child: [] },
            { id: 9, label: "I", child: [] },
          ],
        },
      ],
    };

    const search = (tree, target) => {
      if (tree.id === target) {
        // return
        console.log("tree label", tree.label);
      }
      for (const child of tree.child) {
        const res = search(child, target);

        if (res) {
          // return res;
          console.log("res", res);
        }
      }
    };

    return (
      <html lang="en">
        <head>
          <title>Learning About Nodes</title>
        </head>

        <body style={{ textAlign: "center" }}>
          <button
            type="button"
            style={{
              overflow: "hidden",
              padding: 10,
              cursor: "pointer",
              borderRadius: 25,
              backgroundColor: "#B76E79",
              letterSpacing: 0.1 + "em",
            }}
            onClick={search(tree, 7)}
          >
            test
          </button>

          <br />
          <br />
          <button
            type="button"
            style={{
              overflow: "hidden",
              padding: 10,
              cursor: "pointer",
              borderRadius: 25,
              backgroundColor: "#B76E79",
              letterSpacing: 0.1 + "em",
            }}
            onClick={this.buttClick}
          >
            Refresh Page
          </button>
          <br />
          <h1 style={{ color: "red" }}>Shark World</h1>
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
