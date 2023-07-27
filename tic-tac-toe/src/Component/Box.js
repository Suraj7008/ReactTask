// Box.js
import React from 'react'

import "./Box .css"

export const Box = ({ value,onClick,index, ...rest }) => {
    const style= value === "X" ? "box x" : "box o";
    const cellLabel= `${Math.floor(index/3)+ 1} row ${(index% 3 + 1)} col`;
    
    
   
    return (
 
        <button  className={style} onClick={onClick} {...rest} aria-label={cellLabel}>
      {value}
      </button>
      
  );
};