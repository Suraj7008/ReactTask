// Board.js
import React from 'react'

import {Box} from "./Box"
import "./Board.css"

export const Board = ({ board, onClick }) => {
  return (
    <div className='board' role="grid" aria-label="table 3 row and 3 column">
        {board.map(( value, idx ) => {
          // const row = Math.floor(idx /3) +1;
          // const col = (idx% 3)+ 1;
          // // const arialabel= `${row} row ${col} col`;
          // const arialabel= value ? value : `${row} row ${col} col`;

            return( 
            <Box key={idx} value={value} index={idx}
            onClick={()=> value === null && onClick(idx)} 
            />
            );
        })}
    </div>
  );
};