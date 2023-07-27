// Board.js
import React from 'react'
import { useEffect } from 'react';
import {Box} from "./Box"
import "./Board.css"

export const Board = ({ board, onClick }) => {
  
  const handleKeyDown = (event) => {

    if (event.key === "ArrowUp") {
      if(document.activeElement?.previousElementSibling?.previousElementSibling?.previousElementSibling) {
      document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.focus();
      }
    } else if (event.key === "ArrowDown") {
      if(document.activeElement?.nextElementSibling?.nextElementSibling?.nextElementSibling)  {
      document.activeElement.nextElementSibling.nextElementSibling.nextElementSibling.focus();
      }
    } else if (event.key === "ArrowLeft") {
      if(document.activeElement?.previousElementSibling){
      document.activeElement.previousElementSibling.focus();
      }
    } else if (event.key === "ArrowRight") {
      if(document.activeElement?.nextElementSibling){
      document.activeElement.nextElementSibling.focus();
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
    <div className='board' aria-label="table 3 row and 3 column">
        {board.map(( value, idx ) => {

            return( 
            <Box  key={idx} value={value} index={idx}
            onClick={()=> value === null && onClick(idx)} 
            />
            );
        })}
    </div>
  );
};