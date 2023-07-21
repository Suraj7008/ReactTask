import React from 'react'
import { Box } from './Box'
import "./Board.css"


export const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((value, idx) => {
        return <Box value={value} onClick={() => value === null && onClick(idx)} /> 
        //it will trigger the onClick function only if the cell's value is null. 
        // This check prevents clicking on cells that are already occupied.
        })}
        </div>
  )
}
