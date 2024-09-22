
import { useState } from 'react';
import './Boxes.css'; // Assuming you have a separate CSS file for styles

function Boxes({ result }) {
  const [activeId, setActiveId] = useState(null); // State to track the active (clicked) div

  function handleClick(e) {
    const userValue = e.currentTarget.id;
    setActiveId(userValue); // Set the clicked div's ID as active to apply the "blink" class
    result(userValue); // Call the result function with the user's choice

    // Remove the "active" class after 1 second to stop the blinking effect
    setTimeout(() => {
      setActiveId(null);
    }, 500);
  }

  return (
    <div className='box flex w-full items-center py-4 justify-evenly h-[18rem]'>
      <div
        id="rock"
        onClick={handleClick}
        className={`border-zinc-300 border-[3px] w-[20vw] h-[20vw] rounded-full bg-red-600 overflow-hidden ${activeId === "rock" ? "blink" : ""}`}
      >
        <img src="fist.png" alt="rock" />
      </div>
      <div
        id="paper"
        onClick={handleClick}
        className={`border-zinc-300 border-[3px] w-[20vw] h-[20vw] rounded-full bg-red-600 overflow-hidden ${activeId === "paper" ? "blink" : ""}`}
      >
        <img src="hand-paper.png" alt="paper" />
      </div>
      <div
        id="scissors"
        onClick={handleClick}
        className={`border-zinc-300 border-[3px] w-[20vw] h-[20vw] rounded-full bg-red-600 overflow-hidden ${activeId === "scissors" ? "blink" : ""}`}
      >
        <img src="scissors.png" alt="scissors" />
      </div>
    </div>
  );
}

export default Boxes;
