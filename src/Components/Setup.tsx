import {useSearchParams} from "next/navigation"
import AllTasks from "./AllTasks"
import AddTodo from "./addTodo";



const Setup = () => {

    const searchParam = useSearchParams();
    const quiryParam = searchParam.get('task');

  return (
    <div>
        {quiryParam === 'new' ?  <AddTodo/> : <AllTasks/> }
    </div>
  )
}

export default Setup