

function Boxes({ result }) { // Accept the result function as a prop

  function handleClick(e) {
    const userValue = e.currentTarget.id;
    
    result(userValue); // Call the result function with the user's choice
  }

  return (
    <div className='box flex w-full items-center py-4 justify-evenly h-[18rem]'>
      <div id="rock" onClick={handleClick} className="flex justify-center items-center w-[20vw] h-[20vw] rounded-full bg-red-600 overflow-hidden">
        <img src="fist.png" alt="rock" width="70px"/>
      </div>
      <div id="paper" onClick={handleClick} className="w-[20vw] flex justify-center items-center h-[20vw] rounded-full bg-red-600 overflow-hidden">
        <img src="hand-paper.png" alt="paper" width="70px"/>
      </div>
      <div id="scissors" onClick={handleClick} className="flex justify-center items-center w-[20vw] h-[20vw] rounded-full bg-red-600 overflow-hidden">
        <img src="scissors.png" alt="scissors" width="80px"/>
      </div>
    </div>
  );
}

export default Boxes;
