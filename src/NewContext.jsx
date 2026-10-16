
import { createContext, useState } from "react";

export let NewContext = createContext();

export default function NewContextProvider({ children }) {
  let [recorded, setRecorded] = useState(() => {
    try{
    return JSON.parse(localStorage.getItem("recorded")) || []
   
     } catch {
    return [];
  }
  
  });
 
  function SaveRecored(value) {
    if (value.trim() !== "") {
      let newRecord = [...recorded, { text: value, done: false }];

      setRecorded(newRecord);

      localStorage.setItem("recorded", JSON.stringify(newRecord));
    }
  }
  function DeleteTodo(index) {
    let newRecorded = recorded.filter((item , i) =>i !== index)   
     
        setRecorded(newRecorded)
        localStorage.setItem("recorded", JSON.stringify(newRecorded))
    }
  function EditTodo(index,newValue) {
    let newRecorded = recorded.map((item, i) => i === index 
    ? { ...item, text: newValue } : item )
     
        setRecorded(newRecorded)
        localStorage.setItem("recorded", JSON.stringify(newRecorded))
    }
  function Status(index){
    let newRecorded=recorded.map((item , i) =>
      i === index 
        ?{...item , done: !item.done }
        : item )
     setRecorded(newRecorded)
        localStorage.setItem("recorded", JSON.stringify(newRecorded))   
      
  }

  return (
    <NewContext.Provider value={{recorded, SaveRecored,DeleteTodo,EditTodo,Status }}>
      {children}
    </NewContext.Provider>
  );
}
