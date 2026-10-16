import { useContext, useState } from "react";
import { NewContext } from "./NewContext";
import Delete from "./Delete";
import Edit from "./Edit";

export function Todos() {
    let {recorded,EditTodo,Status} = useContext(NewContext);
    let [editIndex, setEditIndex] = useState(null);
   

    return (
        <div>
            <ul >
                {recorded.map((item, index) => (
                    <li key={index} 
                    dir="rtl"
                    className="flex flex-row justify-between border-2 border-gray-300
                     rounded-xl p-2 m-2 text-right">
                {editIndex === index 
                ? (
                    
                    <input
                    // dir="rtl"
                    className="w-full p-2 rounded-lg text-black mb-4 focus:outline-none" 
                    defaultValue={item.text}
                    autoFocus
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            EditTodo(index,e.target.value)
                            setEditIndex(null)
                    }}} />
                
                )
                : (  <div className="flex gap-1 ">
                    <input type="checkbox" className="" checked={item.done}
                    onChange={()=>{Status(index)}} />
                       <span className={`text-center pt-1 ${item.done ? "line-through text-gray-300" : ""}`}>{item.text}</span>
                     </div>    
                )}       
                    <div className="flex flex-row justify-end gap-1">
                        <Edit index={index} onEdit={()=> setEditIndex(index)} />
                        <Delete index={index} />
                    </div> 
                </li>     
                ))}
            </ul>

        </div>
    )}