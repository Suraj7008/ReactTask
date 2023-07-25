import React from 'react'
import "./Box .css"

export const Box = ({ value, onClick, idx}) => {
  const style = value === "X" ? "box x" : "box o"; 
  // const numberIndex = Array(9);
  const Num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const checkValue = () => {
  Num.forEach((value, idx)=> {
    onClick(value, idx)
  }
  )

}

  return (
    // Num.map(function(Num){
      // return (
      <button className={style} onClick={checkValue} aria-label = {Num + value} >{value}</button>
      )
    }
  

