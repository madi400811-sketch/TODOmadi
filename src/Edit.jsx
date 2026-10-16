import { useContext } from "react";
import { NewContext } from "./NewContext";


export default function Edit({index , onEdit}) {
    let{recorded,} = useContext(NewContext);
  return (
        <div>
        <button
        onClick={onEdit}   
        className="text-red-500 hover:text-red-700 text-lg font-bold"

        >
         ✏️
        </button>
    </div>
  )
}