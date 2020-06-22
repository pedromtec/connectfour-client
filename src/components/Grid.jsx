import React from 'react'
import PropTypes from 'prop-types'
import Disk from './Disk'
import './Grid.css'

const Grid = ({ grid, dropPiece }) => (
  <div className="grid">
    {grid.map((row, indexRow) => (
      <div className="row" key={indexRow}>
        {row.map((disk, indexDisk) => (
          <Disk
            key={indexDisk}
            value={disk}
            row={indexRow}
            handleClick={() => dropPiece(indexDisk)}
          />
        ))}
      </div>
    ))}
  </div>
)

Grid.propTypes = {
  grid: PropTypes.array.isRequired,
  dropPiece: PropTypes.func.isRequired,
}

export default Grid
