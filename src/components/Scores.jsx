
function  Score({userScore,compScore}) {
  return (
    <div className='flex justify-evenly items-center  w-full h-[10rem]'>
        <div className='items-center justify-center flex flex-col h-full w-[8rem] '>
            <h1 className='text-[3rem] text-green-600'>{userScore}</h1>
            <p className='text-[3rem] text-white'>You</p>
        </div>
        <div className='items-center justify-center flex flex-col h-full w-[8rem] '>
            <h1 className='text-[3rem] text-green-600'>{compScore}</h1>
            <p className='text-[3rem] text-white'>Comp</p>
        </div>
      
    </div>
  )
}

export default Score
