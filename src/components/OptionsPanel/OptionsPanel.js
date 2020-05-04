import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = (props) => (
  <div>
    <TileSelector numTiles={props.numTiles} handleNumTileChange={props.handleNumTileChange} />
    <Button playing={props.playing} startGame={props.startGame} />
  </div>
)



export default OptionsPanel
