"use client"

import { useTodos } from "@/store/Todos"
import {useRouter, useSearchParams} from "next/navigation"
import { useEffect, useState } from "react";


const AllTasks = () => {
    const {tasks, handleChangeStatus, handleDelete, handleView, markImportent} = useTodos();

    // let filterTodos = tasks;
    const[filterTodos, setfilterTodos] = useState([]);
    const searchParam = useSearchParams();
    const quiryParam = searchParam.get('task');
    const router = useRouter();
    // console.log(quiryParam);    
    useEffect(()=>{
        setfilterTodos(tasks)
        localStorage.setItem("myTasks", JSON.stringify(tasks));
        if(quiryParam === 'progress'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'Progress') )
        }
        else if(quiryParam === 'completed'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'Done') )

        }
        else if(quiryParam === null){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'ToDo') )
        }
    },[quiryParam,tasks])

    const handleViewon = (task:{})=>{
        handleView(task);
        router.push('/view')
    }
    const handleEdit = (task:{})=>{
        handleView(task);
        router.push('/edit')
    }


  return (
    <div className=" container w-7/12 m-auto " >
        <ol>
            <li className=" flex justify-between pl-2 border-t pt-4 pr-2 m-1 mb-4 shadow-sm font-semibold pb-4 border-b-2 text-zinc-600">
                <p className=" w-60">Title</p>
                {quiryParam !== 'completed'?<p>Mark Importent</p>:""}
                <p>Status</p>
                <p>Fution Buttons</p>
            </li>
            {
                filterTodos.map((todo)=>{
                    return (
                    <li key={todo.id} className={todo.importent===true?" flex  justify-between pl-2 pr-2 m-1 shadow-sm bg-yellow-100":" flex  justify-between pl-2 pr-2 m-1 shadow-sm"}>
                        <button className=" pt-3  w-80  pb-2  font-medium text-left" onClick={()=> handleViewon(todo)}>{todo.task}</button>
                        <span className=" pt-3">
                            {todo.status !== 'Done'?<label htmlFor={todo.id} className=" pr-2">Importent</label>:""}
                            {todo.status !== 'Done'? <input className="rounded text-pink-500" type="checkbox" id={todo.id} checked={todo.importent} onChange={()=>markImportent(todo.id) }/>:""}
                        </span>
                        <select className="px-3 py-0 rounded-full bg-orange-100 font-bold text-sm   " disabled={quiryParam === 'completed'} onChange={(e)=>{handleChangeStatus(e.target.value, todo.id)}}>
                            <option value="ToDo" selected={quiryParam === null}>ToDo</option>
                            <option value="Progress" selected={quiryParam === 'progress'}>Progress</option>
                            <option value="Done" selected={quiryParam === 'completed'}>Done</option>
                        </select>
                        {/* <button type="button" className=" text-sm font-bold text-green-500" onClick={()=> handleViewon(todo)}>View</button> */}
                        {todo.status !== 'Done'?<button type="button" className=" text-sm font-bold text-orange-500" disabled={todo.status === 'Done'} onClick={()=> handleEdit(todo)}>Edit</button> :""}
                        
                        <button type="button" className=" text-sm font-bold text-amber-700" onClick={()=> handleDelete(todo.id)}>Delete</button>
                        
                    </li>
                    
                    )
                })
            }
        </ol>
    </div>
  )
}

export default AllTasks