import * as React from "react";
import { useState } from "react";

export function DomTraversal() {
  let [output, setOutput] = useState("");

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

  // node tree
  let textInput = React.createRef();

  function handleClick() {
    search(tree, Number(textInput.current.value));
  }

  let matchList = [];

  function search(tree, input) {
    if (textInput.current.value !== "") {
      textInput.current.value = "";
      matchList = [];
      setOutput((output = ""));
    }
    if (tree.id === input) {
      matchList.push(tree.label);
    }
    for (const child of tree.child) {
      search(child, input);
    }
    if (matchList !== undefined) {
      setOutput(output + matchList);
    }
    return matchList;
  }

  // fun facts
  let numb = -1;

  function nextFact() {
    const td = document.getElementsByTagName("td")[0];
    const tdKids = td.childNodes;
    numb += 1;
    const nextFactButton = document.getElementsByTagName("button")[1];

    if (numb < tdKids.length) {
      td.childNodes[numb].style.color = "black";
    }
    if (numb === tdKids.length - 1) {
      nextFactButton.style.backgroundColor = "grey";
    }
  }

  return (
    <html lang="en">
      <head>
        <title>DOM</title>
      </head>

      <body className="text-center">
        <input
          className="text-center mr-2"
          ref={textInput}
          type="text"
          placeholder="Type a number..."
        />
        <button
          type="button"
          onClick={handleClick}
          className="tracking-widest overflow-hidden cursor-pointer rounded-3xl p-2"
          style={{
            backgroundColor: "#B76E79",
          }}
        >
          Submit
        </button>
        <div className="text-center tracking-widest text-3xl">{output}</div>
        <br />
        <div className="tracking-widest" style={{ padding: 10 + "px" }}>
          Enter a number between 1 and 13 to traverse the node tree and see your
          returned letters
        </div>

        <div className="max-w-2xl lg:max-w-4xl m-auto pt-4">
          <hr />
        </div>

        <div className="pb-8">
          <h1 className="text-gray-800 font-bold pt-8 tracking-widest text-2xl">
            Salvador Dalí Fun Facts
          </h1>
          <table className="text-center m-auto">
            <td className="px-6 text-white pt-4 tracking-widest">
              <tr>
                <div className="pb-5">
                  He was friends with one of my favorite musical artists, Alice
                  Cooper
                </div>
              </tr>
              <tr>
                <div className="pb-5">We were both born on May 11th</div>
              </tr>
              <tr>
                <div className="pb-5">
                  (Only I was born the same month / year javascript was
                  developed)
                </div>
              </tr>
              <tr>
                <div className="pb-5">He had an ocelot named Babou</div>
              </tr>
              <tr>
                <div className="pb-5">
                  Dalí and his wife lived in America for 8 years
                </div>
              </tr>
              <tr>
                <div className="pb-5">
                  His trademark mustache was still intact, since his death in
                  1989, when his body was exhumed in 2017
                </div>
              </tr>
            </td>
          </table>
          <button
            type="button"
            className="tracking-widest overflow-hidden cursor-pointer rounded-3xl p-2"
            style={{
              backgroundColor: "#B76E79",
            }}
            onClick={nextFact}
          >
            Next Fact
          </button>
        </div>
      </body>
    </html>
  );
}

export default DomTraversal;
