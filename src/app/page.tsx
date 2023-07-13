"use client"
import AllTasks from "@/Components/AllTasks"
import Navbar from "@/Components/Navbar"
import Setup from "@/Components/Setup"
import AddTodo from "@/Components/addTodo"
// import {useSearchParams} from "next/navigation"


const page = () => {
    // const searchParam = useSearchParams();
    // const quiryParam = searchParam.get('task');



  return (
    <main>
      
      <Navbar/>
      <Setup/>
      {/* {quiryParam === 'new' ?  <AddTodo/> : <AllTasks/> } */}
     
    </main>
  )
}

export default page