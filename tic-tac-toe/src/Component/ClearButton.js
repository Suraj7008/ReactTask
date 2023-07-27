import React from "react";
import './ClearButton.css' 

export const Clear = ({ clearButton }) => {
// const firstElement = useRef(null);
// const onPressClear = (board) =>{
//     console.log("presed")
//         if(board && firstElement.current) {
//             firstElement.current.focus();
//         }
//       }
    return (
        <div>
            <button type="reset" value="reset" className="clear-button" onClick={clearButton}>Clear</button>
        </div>
    )
}