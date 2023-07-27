import React, {useEffect, useState} from 'react';
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
    [0,4,8],
    [2,4,6]
  ]

const [board, setBoard] = useState(Array(9).fill(null));
const [xPlaying, setXPlaying] = useState(true);
const [allValuesFilled, setAllValuesFilled] = useState(false);
const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
const [gameOver, setGameOver] = useState(false);
const [resultMessage, setResultMessage] = useState("");

const handleBoxClick = (boxIdx) => {
  
const checkIfBoardIsFilled = (boardToCheck) => {
  const a = boardToCheck.every((value) => value !== null);
  setAllValuesFilled(a)
};
 
  if (!board[boxIdx]) {
    const newBoard = [...board];
    newBoard[boxIdx] = 'X'; // Replace 'X' with the appropriate value based on your game logic.

    setBoard(newBoard);
    checkIfBoardIsFilled(newBoard);
  }

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
  setResultMessage("")
  setGameOver(false);
  setAllValuesFilled(false)

if(board.length){
  setBoard(Array(9).fill(null));
}};

useEffect(() =>{
 
  if (gameOver || allValuesFilled ){
    const winner = checkWinner(board);
    setResultMessage(
      winner ? `Game Over. "${winner}" is WINNER!` : "Game Over. It's a draw!"
    );
  }else {
    setResultMessage("");
  }
}, [board, gameOver]);

const checkWinner = (board) => {
  for (let i = 0; i < winCondition.length; i++) {
    const [x, y, z] = winCondition[i];

    if (board[x] && board[x] === board[y] && board[y] ===board[z])  {
      setGameOver(true);
      return board[x];
    }
  }
}

  return (
    <div className='App'>
      <Score scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? clear : handleBoxClick} />
      <Clear clearButton={clear} aria-label="Clear" />
      <div className="visually-hidden" aria-live="polite">
      {resultMessage}
      </div>
    </div>
  );
}

export default App;