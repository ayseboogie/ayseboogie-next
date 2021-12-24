import * as React from "react";
import { Component } from "react";

export class DomTraversal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
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
        alert(matchList);
        if (matchList.length === 2) {
        }
      }
      for (const child of tree.child) {
        const res = search(child, target);
        // if (res) {
        // return res;
        // }
      }
      return matchList;
    };

    let textInput = React.createRef();

    let numb = -1;

    function nextFact() {
      const td = document.getElementsByTagName("td")[0];

      const tdKidz = td.childNodes;
      numb += 1;
      const nextFactButton = document.getElementsByTagName("button")[1];
      if (numb < tdKidz.length) {
        td.childNodes[numb].style.color = "black";
      }
      if (numb == tdKidz.length - 1) {
        nextFactButton.style.backgroundColor = "grey";
      }
    }

    return (
      <html lang="en">
        <head>
          <title>DOM</title>
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
          <br />

          <div className="max-w-2xl lg:max-w-4xl m-auto">
            <hr />
          </div>

          <h1
            style={{
              color: "green",
              paddingTop: 10 + "px",
              fontSize: 24 + "px",
            }}
          >
            Salvador Dalí is my favorite visual artist.
          </h1>
          <h2 style={{ paddingBottom: 1.75 + "em" }}>Fun Facts</h2>
          <table
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <td
              style={{
                color: "white",
                paddingTop: 10 + "px",
              }}
            >
              <tr>
                <div style={{ paddingBottom: 1.25 + "em" }}>
                  He was friends with one of my favorite musical artists, Alice
                  Cooper
                </div>
              </tr>
              <tr>
                <div style={{ paddingBottom: 1.25 + "em" }}>
                  We were both born on May 11th
                </div>
              </tr>
              <tr>
                <div style={{ paddingBottom: 1.25 + "em" }}>
                  He had an ocelot named Babou
                </div>
              </tr>
              <tr>
                <div style={{ paddingBottom: 1.25 + "em" }}>
                  Dalí and his wife lived in America for 8 years
                </div>
              </tr>
              <tr>
                <div style={{ paddingBottom: 1.25 + "em" }}>
                  His trademark mustache was still intact, since his death in
                  1989, when his body was exhumed in 2017
                </div>
              </tr>
            </td>
          </table>
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
            onClick={nextFact}
          >
            Next Fact
          </button>
          <br />
        </body>
      </html>
    );
  }
}

DomTraversal.propTypes = {};

DomTraversal.defaultProps = {};

export default DomTraversal;
