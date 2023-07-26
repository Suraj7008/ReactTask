// Board.js
import React from 'react'
import { useEffect } from 'react';
import {Box} from "./Box"
import "./Board.css"

export const Board = ({ board, onClick }) => {
  
  const handleKeyDown = (event) => {
    const arrayElement = Array(9);

    if (event.key === "ArrowUp") {
      if(document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling) {
      console.log("up pressed");
      document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.focus();
      // moveFocus();
      }
    } else if (event.key === "ArrowDown") {
      if(document.activeElement.nextElementSibling.nextElementSibling.nextElementSibling){
      console.log("down arrow pressed");
      document.activeElement.nextElementSibling.nextElementSibling.nextElementSibling.focus();
      // moveFocus();
      }
    } else if (event.key === "ArrowLeft") {
      if(document.activeElement.previousElementSibling){
      console.log("left arrow pressed")
      document.activeElement.previousElementSibling.focus();
      // moveFocus();
      }
    } else if (event.key === "ArrowRight") {
      if(document.activeElement.nextElementSibling){
      console.log("right arrow pressed")
      document.activeElement.nextElementSibling.focus();
      // moveFocus();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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