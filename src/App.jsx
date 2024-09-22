
import './App.css'
import { useState } from 'react';
import Boxes from './components/boxes'
import Score from './components/scores'
import Button from './components/Button'
function App() {

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState('Pick Your Move');
  
  let Game=["rock","paper","scissors"]
  function generateCompValue(){
     return Game[Math.floor(Math.random()*3)];
  }
  function result(Uservalue) {
    let CompValue = generateCompValue();
    console.log(`User: ${Uservalue}, Comp: ${CompValue}`);

    if (Uservalue === CompValue) {
      setMessage("It's a Draw");
    } else if (Uservalue === "rock") {
      if (CompValue === "paper") {
        setCompScore(compScore + 1);
        setMessage("You Lost");
      } else {
        setUserScore(userScore + 1);
        setMessage("You Won");
      }
    } else if (Uservalue === "paper") {
      if (CompValue === "scissors") {
        setCompScore(compScore + 1);
        setMessage("You Lost");
      } else {
        setUserScore(userScore + 1);
        setMessage("You Won");
      }
    } else if (Uservalue === "scissors") {
      if (CompValue === "rock") {
        setCompScore(compScore + 1);
        setMessage("You Lost");
      } else {
        setUserScore(userScore + 1);
        setMessage("You Won");
      }
    }
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-900'>
      <Boxes result={result}/>
      <Score userScore={userScore} compScore={compScore}/>
      <Button message={message}/>


    </div>
    </>
  )
}

export default App
