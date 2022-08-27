import React from "react";
import BFS from "../algorithms/BFS";

// number of rows and cols to be displayed
const rows = Array.from(Array(13).keys());
const cols = Array.from(Array(50).keys());

const Matrix = () => {
  const handleClick = async () => {
    BFS();
  };

  return (
    <table className='matrix'>
      <tbody onClick={handleClick}>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {cols.map((col, index) => {
                if(col > cols.length -37) {
                  return <td className={row + "-" + col} id='only-pc-cols' key={index}></td>;
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
