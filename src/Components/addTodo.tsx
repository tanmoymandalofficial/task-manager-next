"use client"

import { useTodos } from "@/store/Todos";
import { FormEvent, useState } from "react"
import AllTasks from "./AllTasks";
import Navbar from "./Navbar";
// import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AddTodo = () => {
    const [task, setTask] = useState("");
    const [description, setdescription] = useState("");

    const { handleAddTask } = useTodos();

    const router = useRouter()


    const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddTask(task, description);
        console.log("got this", task, description)
        // console.log(handleAddTask);
        setTask("");
        setdescription("");
        // alert("One task is added");
        router.push('/')
    }


  return (
    <div className=" container w-7/12 m-auto">
      <form onSubmit={handleFormSubmit} className=" grid justify-center  w-2/5 m-auto pt-8 pb-14 pr-6 pl-6 shadow-md bg-blue-50 min-w-fit">
        <h4 className=" text-center font-bold mb-6">Add New Task</h4>
        <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Title</label>
        <input type="text" required className=" p-1 mb-7 border" value={task} onChange={event => setTask(event.target.value)}/>
        <label htmlFor="" className=" text-sm font-semibold mb-1 text-slate-500">Task Description</label>
        <input type="text" required className=" p-1 mb-4 border h-16"  value={description} onChange={event => setdescription(event.target.value)}/>
        <button type="submit" className="border rounded-lg bg-red-400 pt-1 pb-1 font-semibold text-yellow-50">Add Task</button>
        {/* <Navbar/> */}
        {/* <AllTasks/> */}
        
      </form>
    </div>
  )
}

export default AddTodo