import React from 'react'

const page = () => {
  return (
    <>
    <h1 className="bg-black text-center text-white p-5 text-5xl ">Vivek's Todo List</h1>
    <form >
      <input type="text"
      className='m-8 border-4 border-zinc-800 text-2xl px-4 py-2'
      placeholder='Enter Task here'
       />
       <input type="text"
      className='m-8 border-4 border-zinc-800 text-2xl px-4 py-2'
      placeholder='Enter Description here'
       />
       <button className="bg-black border text-white text-2xl rounded font-bold m-5 px-4 py-3">Add Task</button>
    </form>
    </>
  )
}

export default page
