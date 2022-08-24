import React from 'react'

const rows = Array.from(Array(13).keys());
const cols = Array.from(Array(33).keys());

const Matrix = () => {
  return (
    <table className='matrix'>
        <tbody>
           { rows.map((row,index) => {
                return (
                    <tr key={index}>
                        {cols.map((col,index) => {
                            return (
                                <td key={index}></td>
                            )
                        })}
                    </tr>
                );
            })}
        </tbody>

    </table>
  )
}

export default Matrix