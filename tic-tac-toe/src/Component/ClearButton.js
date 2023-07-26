import React from "react";
import './ClearButton.css' 

export const Clear = ({ clearButton }) => {

    return (
        <div>
            <button type="reset" value="reset" className="clear-button" onClick={clearButton}>Clear</button>
        </div>
    )
}