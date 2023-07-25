import React, {useState} from 'react';
import './App.css';
import { Board } from './Component/Board';
import { Clear } from './Component/ClearButton';
import { Score } from './Component/Score';


function App() { 

  const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,5],
    [2,4,6]
  ]

const [board, setBoard] = useState(Array(9).fill(null));
const [xPlaying, setXPlaying] = useState(true);
const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
const [gameOver, setGameOver] = useState(false);

const handleBoxClick = (boxIdx, position, idx) => {
  console.log(position)
  const updatedBoard = board.map((value, idx) =>{
    if(idx === boxIdx) {
      return xPlaying === true ? "X" : "O";
    } else {
      return value;
    }
  })
  
  const winner = checkWinner(updatedBoard);

  if (winner) {
    if (winner === "O") {
      let { oScore } = scores;
      oScore += 1;
      setScores({ ...scores, oScore })
    } else {
      let { xScore } = scores;
      xScore += 1;
      setScores({ ...scores, xScore })
    }
  }

  setBoard(updatedBoard);
  setXPlaying(!xPlaying);
 
}

const clear = () => {
  setGameOver(false);
if(board.length){
  setBoard(Array(9).fill(null));
}
}

const checkWinner = (board) => {
  for (let i = 0; i < winCondition.length; i++) {
    const [x, y, z] = winCondition[i];


    if (board[x] && board[x] === board[y] && board[y] ===board[z])  {
      setGameOver(true);
      return board[x];
    }
  }
}

// const resetBoard = () => {
//   setGameOver(false);
//   setBoard(Array(9).fill(null))
// }

  return (
    <div className='App'>
      <Score scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? clear : handleBoxClick} />
      <Clear clearButton={clear}/>
      {/* {console.log(board)} */}
    </div>
  );
}

export default App;