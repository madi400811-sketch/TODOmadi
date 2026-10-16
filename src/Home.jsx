import MusicPlayer from "./MusicPlayer";
import { NewContext } from "./NewContext";
import { useContext } from "react"; 
import {Todos} from "./Todos";
import { useState } from "react";

export default function Home() {
  let {recorded,SaveRecored} = useContext(NewContext);
  let[img ,setImg]=useState("./emogi.png");
  let[name, setName]=useState("")
  

  
  return (
    <div className="font-vazir w-full min-h-screen bg-[url('todo.jpg')] bg-cover bg-center bg-no-repeat">
      <MusicPlayer />
      
        <div className="flex justify-end items-start">
        <input
          placeholder="نام خود را وارد کنید"
          value={name}
          onChange={(e) => setName(e.target.value)}
          dir="rtl"
        />
      </div>
      <div className="text-center mx-auto mt-[130px] p-4 bg-blue-400
       w-[550px] h-[550px] rounded-xl text-white ">

          <p className="text-4xl font-bold mb-4">{name} عزیزم کارهاتو بنویس</p>
          
          
          <input dir="rtl"  type="text" placeholder="کارهاتو بنویس"

          onKeyDown={(e) => {
                if (e.key == "Enter"){
                SaveRecored(e.target.value);
                e.target.value = "";
              }}}

          className="w-full p-2 rounded-lg text-black mb-4 focus:outline-none" />
          
          <div className="border-2 border-blue-700 rounded-lg 
          p-4 h-[400px] w-[500px] m-auto">
            {recorded.length  === 0 && (
            <img
              src={img}
              alt="تصویر"
              className=" object-contain mx-auto mb-3"
            />)}
              <Todos/>
          </div>
      </div>
    </div>
  )
}