const BFS = async () => {
  // # Two dimentional array to represent adjacencyMatrix graph
  // # Direction vectors
  const dRow = [-1, 0, 1, 0];
  const dCol = [0, 1, 0, -1];
  let queue = [];
  const visited = [];
  // let distance = {};
  const startNode = { r: 6, c: 6 };
  document.getElementsByClassName(`${startNode.r}-${startNode.c}`)[0].style.background =
    "#289fc6";
    document.getElementsByClassName(`${startNode.r}-${startNode.c}`)[0].style.border =
      "solid 1px white";

  // BFS search on adjacency Matrix (2D Array)
  visited.push(startNode);
  queue.push(startNode);
  // distance[startNode] = 0;
  let currNode = startNode;

  while (queue.length > 0) {
    currNode = queue.shift();
    const row = currNode.r;
    const col = currNode.c;

    // Find Neighbors
    for (let i = 0; i < 4; i++) {
      const adjx = row + dRow[i];
      const adjy = col + dCol[i];
      if (isValid(visited, adjx, adjy)) {
        queue.push({ r: adjx, c: adjy });
        visited.push({ r: adjx, c: adjy });
        await new Promise((resolve) => setTimeout(resolve, 0));
        console.log(adjx, adjy, document.getElementsByClassName(`${adjx}-${adjy}`));
        document.getElementsByClassName(`${adjx}-${adjy}`)[0].style.background =
          "#289fc6";
        document.getElementsByClassName(`${adjx}-${adjy}`)[0].style.border =
          "solid 1px white";
      }
    }
  }
};

const isValid = (vis, row, col) => {
  // If cell lies out of bounds
  if (row < 0 || col < 0 || row > 12 || col > 49) {
    return false;
  }

  // check if any object in vis is equal to row,col object
  let result = false;
  for (let i = 0; i < vis.length; i++) {
    if (vis[i].r === row && vis[i].c === col) {
      result = true;
      break;
    }
  }

  // If cell is already visited
  if (result) return false;

  // Otherwise
  return true;
};

export default BFS;

