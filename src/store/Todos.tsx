"use client"
import { error } from "console";
import { ReactNode, createContext, useContext, useState } from "react";
import Link from "next/link"


// type of the task data we enter from browser
export type task = {
    id:string;
    task: string;
    description:string;
    status: string;
    importent: boolean;
    createdAt: string;
}

// Type of the Context the we sent fro store 
export type TodosContext = {
    tasks: task[];
    handleAddTask : (task:string, description:string)=> void;
    handleChangeStatus : (valaue:string, id:string) => void;
    handleDelete: (id:string)=> void;
    viewEdit: task;
    handleView: (task:{})=> void;
    handleEdit: (task:{})=> void;
    markImportent: ()=>void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children}:{children:ReactNode}) =>{

    let myTask = JSON.parse(localStorage.getItem("myTasks")) || [];
    console.log(myTask);
    // console.log(localStorage.getItem("myTasks"))

    const [tasks, setTasks] = useState<task[]>(myTask)
    const [viewEdit, setViewEdit] = useState({})


//    Handle add task mathod from front end
    const handleAddTask = (task:string, description:string)=>{

        setTasks((prev) => { 
            
            const newTask:task[] = [{
                id: Math.random().toString(),
                task,
                description,
                status: "ToDo",
                importent: false,
                createdAt: new Date().toString()
            },
                ...prev
        
            ]
            console.log(newTask);
            return newTask;
        })
        // redirect('/')
   }

//    status change handle
    const handleChangeStatus = (valaue:string, id:string)=>{
        console.log(valaue, id);
        setTasks((prev)=>{
            const newTasks = prev.map((task)=>{
                if(task.id === id){
                    return {...task, status:valaue}
                }
                return task;
            })
            return newTasks;
        })




    }

//  handle delete funtion to delete a task

const handleDelete = (id:string)=>{
    console.log(id);

    setTasks((prev)=>{
        const newTasks = prev.filter((task)=> task.id !== id)
        return newTasks;
    })

}

// Handle View funtion
const handleView = (task:{})=>{
    setViewEdit(task);
    console.log(viewEdit);
}

// Handle edit component
const handleEdit = (editTask:{})=>{
    // console.log(task);
    setTasks((prev)=>{
        const newTasks = prev.filter((task)=> task.id !== editTask.id)
        return [editTask, ...newTasks];
    })
    
    console.log(tasks);
}

// mark the task importent funtion
const markImportent = (id)=>{
    console.log("got the importent request"+ id);
    setTasks((prev)=>{
        const newTasks = prev.map((task)=>{
            if(task.id===id){
                return {...task, importent : !task.importent}
            }
            return task;
        })
        return newTasks;
    })
}





   return (
    <todosContext.Provider value={{tasks, handleAddTask, handleChangeStatus, handleDelete, viewEdit, handleView, handleEdit, markImportent}}>
        {children}
    </todosContext.Provider>
   )
}



//custom hooks for getting the context data
export function useTodos(){
    const todoContextValue = useContext(todosContext);
    if(!todoContextValue){
       return console.error("getting new error")
    }
    else{
        // console.log("helow world")
        return todoContextValue;
    }
   

}


