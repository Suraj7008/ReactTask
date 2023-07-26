import React from "react";
import './ClearButton.css' 
import { Board } from "./Board";

export const Clear = ({ clearButton }) => {
    const Board = () => {

    }
    console.log(Board.parentNode)
    return (
        <div>
            <button type="reset" value="reset" className="clear-button" onClick={clearButton}>Clear</button>
        </div>
    )
}