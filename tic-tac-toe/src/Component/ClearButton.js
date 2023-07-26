import React from "react";
import './ClearButton.css' 

export const Clear = ({ clearButton }) => {
// clear.setAttribute("aria-presed","true");
    return (
        <div>
            <button type="reset" value="reset" className="clear-button" onClick={clearButton}>Clear</button>
        </div>
    )
}