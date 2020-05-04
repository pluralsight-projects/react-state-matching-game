import React from 'react'
import './Board.css';
import Tile from '../Tile'
import GameContext from '../../GameContext';
const Board = (props) => {
  const gridConfig = (numTiles) => ({
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  });
  return (
    <GameContext.Consumer>
      {({ tiles, numTiles }) => (
        <div className='Board' style={gridConfig(numTiles)}>
          {tiles.map(tile => <Tile {...tile} />)}
        </div>
      )}
    </GameContext.Consumer>
  )
}

export default Board
