import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='header'>
            <h2>Path Finding Visualizer</h2>
        </div>
        <div className="selects">
            <select name="" id="">
                <option value="Choose Algorithm">Algorithm</option>
                <option value="Breadth-First Search">Breadth-First Search</option>
                <option value="Depth-First Search">Depth-First Search</option>
                <option value="Dijkstra">Dijkstra</option>
            </select>
            <select name="" id="">
                <option value="Choose Maze/Pattern">Maze/Pattern</option>
                <option value="slow">Slow</option>
                <option value="moderate">Moderate</option>
                <option value="fast">Fast</option>
            </select>
            <select name="" id="">
                <option value="Choose Speed">Speed</option>
                <option value="slow">Slow</option>
                <option value="moderate">Moderate</option>
                <option value="fast">Fast</option>
            </select>
        </div>
        
    </nav>
  )
}

export default Nav