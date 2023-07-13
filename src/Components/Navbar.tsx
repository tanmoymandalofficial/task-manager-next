"use client"

import Link from "next/link"
import {useSearchParams} from "next/navigation"

const Navbar = () => {

    const searchParam = useSearchParams();
    const quiryParam = searchParam.get('task');

    // console.log(quiryParam);


  return (
    <nav className=" grid text-center justify-center pt-2 ">
        <h1 className="text-4xl font-bold p-5">Task Manager</h1>
        <div className=" flex pt-3 pb-3 pl-96 pr-96 font-bold bg-blue-50 justify-between gap-10 w-max border-b mb-10">
          <Link href='/?task=new' className={quiryParam==='new'? 'text-red-500' : 'text-black'}> Add Task</Link>
          <Link href='/' className={quiryParam===null? 'text-red-500' : 'text-black'}> To Do</Link>
          <Link href='/?task=progress' className={quiryParam==='progress'? 'text-red-500' : 'text-black'}> In Progress</Link>
          <Link href='/?task=completed' className={quiryParam==='completed'? 'text-red-500' : 'text-black'}> Completed</Link>
        </div>
    </nav>
  )
}

export default Navbar