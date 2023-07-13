"use client"

import { useTodos } from "@/store/Todos"
import { useRouter } from "next/navigation";


const View = () => {
  const { viewEdit } = useTodos();
  const router = useRouter();

  return (
    <div className=" container w-4/12 m-auto  pt-7 pb-7 bg-rose-50 shadow-2">
      <p className=" text-sm text-slate-400 pl-7 pr-7 pb-3">Created At {viewEdit.createdAt}</p>
      {}
      <p className={viewEdit.importent ? 'bg-orange-400 p-2 pl-7 ml-0 text-sm font-bold mb-7' : ' bg-green-400 p-2 pl-7 ml-0 text-sm font-bold mb-7' }>{viewEdit.importent ? "Importent" : "Not Importent"}</p>
      <div className="pl-7 pr-7 ">
        <h2 className="  text-2xl  font-bold"> {viewEdit.task}</h2>
        <p className="text-sm"><b>Status: </b>{viewEdit.status}</p>
        <p className="pt-5 text-sm" ><b>Description:</b></p>
        <p >{viewEdit.description}</p>
        <button className=" bg-emerald-500 p-2 rounded-md pl-6 pr-6 mt-10 font-bold text-white" onClick={()=> router.back()}> Back</button>
      </div>
      
    </div>
  )
}

export default View