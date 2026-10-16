import { useContext } from "react";
import { NewContext } from "./NewContext";


export default function Delete({index}) {
    let{recorded,DeleteTodo} = useContext(NewContext);
  return (
        <div>
        <button
        className="text-red-500 hover:text-red-700 text-2xl font-bold"
        onClick={() => DeleteTodo(index)}
        >
        ×
        </button>
    </div>
  )
}