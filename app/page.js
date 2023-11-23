"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  let renderTask=<h2>No Task Available</h2>
  const submitHandler = (e) =>{
      e.preventDefault();
      setmainTask([...mainTask,{title,desc}]);
      setdesc("");
      settitle("");
      console.log(mainTask)
  };

const deleteHandler =(i)=>{
 let copytask = [...mainTask];
 copytask.splice(i,1);
 setmainTask(copytask);

// setmainTask(mainTask.splice(i,1));

};


  if(mainTask.length >0)
  { renderTask=mainTask.map((t,i)=>{
        return <li key={i} className='flex items-center justify-between mb-8'>
          <div className='p-4 flex  items-center justify-between  w-2/3 '>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl '>{t.desc}</h6>
          <button 
          onClick={() =>{ deleteHandler(i)}}
          className='bg-red-500 rounded-md text-white font-bold px-4 py-2'>
            Delete</button>
        </div>
        </li>
  });}
  return (
    <>
    <h1 className="bg-black text-center text-white p-5 text-5xl ">Vivek's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text"
      className='m-8 border-4 border-zinc-800 text-2xl px-4 py-2'
      placeholder='Enter Title here'
      value={title}
      onChange={(e) => {
        settitle(e.target.value);
      }}
       />
       <input type="text"
      className='m-8 border-4 border-zinc-800 text-2xl px-4 py-2'
      placeholder='Enter Description here'
      value={desc}
      onChange={(e) => {
        setdesc(e.target.value);
      }}
       />
       <button className="bg-black border text-white text-2xl rounded font-bold m-5 px-4 py-3">Add Task</button>
    </form>
    <hr />
    <div className='p-8  bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
