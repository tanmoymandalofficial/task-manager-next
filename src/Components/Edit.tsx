"use client"

import { useTodos } from "@/store/Todos";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Edit = () => {

  const { viewEdit, handleEdit } = useTodos();
  const [editvalue, setEditValue] = useState(viewEdit);
  const router = useRouter()

  const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      handleEdit(editvalue);
      if(editvalue.status==='Progress'){
        router.push('/?task=progress');
      }else{
        router.push('/');
      }
      // handleAddTask(task, description);
      // console.log("got this", task, description)
      // // console.log(handleAddTask);
      // setTask("");
      // setdescription("");
      // // alert("One task is added");
      // router.push('/')
  }
  const handlechange = (event)=>{
    setEditValue({
      ...editvalue,
      [event.target.name] : event.target.value
    })
    // console.log(editvalue);
  }


  return (
    <div className=" container w-7/12 m-auto ">
      <form onSubmit={handleFormSubmit} className=" grid min justify-center w-2/5 m-auto pt-8 pb-14 pr-6 pl-6 shadow-md bg-blue-50 min-w-fit">
        <h4 className=" text-center font-bold mb-6">Edit Your Task</h4>
        <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Title</label>
        <input type="text" required className=" p-1 mb-7 border" name="task" value={editvalue.task} onChange={handlechange}/>
        <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Description</label>
        <input type="text" required className=" p-1 mb-4 border h-16" name="description" value={editvalue.description} onChange={handlechange}/>
        <button type="submit" className="border rounded-lg bg-red-400 pt-1 pb-1 font-semibold text-yellow-50" >Edit Task</button>
      </form>
    </div>
  )
}

export default Edit