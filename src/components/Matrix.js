import React from "react";

const rows = Array.from(Array(13).keys());
const cols = Array.from(Array(33).keys());

const isValid = (vis, row, col) => {
  // # If cell lies out of bounds
  console.log(row)
  if (row < 0 || col < 0 || row > 13 || col > 32) {
    return false;
  }

  // check if any object in vis is equal to row,col object
  let result = false;
  for (let i = 0; i < vis.length; i++) {
    console.log(vis[i], { r: row, c: col });
    if (vis[i].r === row && vis[i].c === col) {
      result = true;
      break;
    }
  }
  // # If cell is already visited
  if (result) return false;
  // # Otherwise
  return true;
};

const Matrix = () => {
  const handleClick = async () => {
    // # Two dimentional array to represent adjacencyMatrix graph
    // # Direction vectors
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, 1, 0, -1];
    let queue = [];
    const visited = [];
    // let distance = {};
    const startNode = { r: 0, c: 0 };

    // # BFS search on adjacency Matrix (2D Array)
    visited.push(startNode);
    queue.push(startNode);
    // distance[startNode] = 0;
    let currNode = startNode;

    while (queue.length > 0) {
      currNode = queue.shift();
      const row = currNode.r;
      const col = currNode.c;
      console.log(currNode);

      // # find neighbors
      for (let i = 0; i < 4; i++) {
        const adjx = row + dRow[i];
        const adjy = col + dCol[i];
        if (isValid(visited, adjx, adjy)) {
          queue.push({ r: adjx, c: adjy });
          visited.push({ r: adjx, c: adjy });
          await new Promise (resolve => setTimeout(resolve, 20));
          document.getElementsByClassName(`${row}-${col}`)[0].style.background = '#289fc6';
          document.getElementsByClassName(`${row}-${col}`)[0].style.border = 'solid 1px white';
        }
      }
    }
  };

  return (
    <table className='matrix'>
      <tbody onClick={handleClick}>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {cols.map((col, index) => {
                if(col > cols.length -8) {
                  return <td className={row + "-" + col} id='last-col' key={index}></td>;
                } else {
                  return <td className={row + "-" + col} key={index}></td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Matrix;
