import { Component } from "react";
import * as React from "react";

export class DomTraversal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  buttClick() {
    const html = document.documentElement;

    console.log("0 ", html);

    const h1 = html.getElementsByTagName("h1")[0];
    console.log("2 ", h1);
    const p = document.getElementsByTagName("p")[0];
    console.log("3 ", p);
    // const ul = document.getElementsByTagName("ul")[0];
    // console.log("4 ", ul);
    // const ulKidz = ul.childNodes;
    // console.log("5 ", ulKidz);
    // ul.firstElementChild.style.background = "yellow";
    const td = document.getElementsByTagName("td")[0];
    console.log("4 ", td);
    const tdKidz = td.childNodes;
    console.log("5 ", tdKidz);
    td.firstElementChild.style.background = "yellow";
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
            { id: 5, label: "E", child: [{ id: 11, label: "K", child: [] }] },
            {
              id: 6,
              label: "F",
              child: [
                { id: 12, label: "L", child: [] },
                {
                  id: 13,
                  label: "M",
                  child: [
                    {
                      id: 7,
                      label: "T",
                      child: [{ id: 12, label: "Y", child: [] }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "C",
          child: [
            { id: 7, label: "G", child: [] },
            {
              id: 8,
              label: "H",
              child: [
                {
                  id: 1,
                  label: "N",
                  child: [
                    { id: 8, label: "U", child: [] },
                    { id: 9, label: "V", child: [] },
                  ],
                },
              ],
            },
            {
              id: 9,
              label: "I",
              child: [
                { id: 2, label: "O", child: [] },
                { id: 3, label: "P", child: [] },
              ],
            },
            { id: 11, label: "X", child: [] },
          ],
        },
        {
          id: 4,
          label: "D",
          child: [
            {
              id: 10,
              label: "J",
              child: [
                { id: 4, label: "Q", child: [] },
                { id: 5, label: "R", child: [] },
                { id: 6, label: "S", child: [] },
                { id: 10, label: "W", child: [] },
              ],
            },
          ],
        },
        {
          id: 13,
          label: "Z",
          child: [],
        },
      ],
    };

    function handleClick() {
      search(tree, textInput.current.value);
    }

    const matchList = [];
    const search = (tree, target) => {
      if (tree.id == target) {
        matchList.push(tree.label);
        // console.log(matchList);
        alert(matchList);
        if (matchList.length === 2) {
          // alert(matchList);
        }
      }
      for (const child of tree.child) {
        const res = search(child, target);
        // if (res) {
        // return res;
        // console.log("res", res);
        // }
      }
      return matchList;
    };

    let textInput = React.createRef();

    return (
      <html lang="en">
        <head>
          <title>Learning About Nodes</title>
        </head>

        <body style={{ textAlign: "center" }}>
          <input
            style={{ textAlign: "center" }}
            ref={textInput}
            type="text"
            placeholder=" Type a number..."
          />
          <button
            type=" button"
            onClick={handleClick}
            style={{
              overflow: " hidden",
              padding: 10,
              cursor: " pointer",
              borderRadius: 25,
              backgroundColor: "#B76E79",
              letterSpacing: 0.1 + "em",
            }}
            className=" icon"
          >
            Submit
          </button>

          <br />
          <div style={{ padding: 10 + "px" }}>
            Enter a number between 1 and 13 to traverse the node tree and see
            your letters
          </div>
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
          <table>
            <td>
              <tr>Hammerhead</tr>
              <tr>Tiger</tr>
            </td>
          </table>
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
