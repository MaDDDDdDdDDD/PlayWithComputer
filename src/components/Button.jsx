

function Button({message}) {
  return (
    <div className='w-full mt-4 h-[6rem]  flex justify-center  items-center  '>
       <button className='border-[4px] border-red-300 px-10 py-3 font-bold bg-green-300 text-[35px] rounded-full'>{message}</button>
    </div>
  )
}

export default Button
