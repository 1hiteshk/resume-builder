import React from "react";
import { Link } from "react-router-dom";

const FormProgressComp = () => {
  const progress = [
    {
      positon: "01",
      fromPart: "Personal Details",
      completed: "False",
    },
    {
      positon: "02",
      fromPart: "Skills",
      completed: "False",
    },
    {
      positon: "03",
      fromPart: "Education",
      completed: "False",
    },
    {
      positon: "04",
      fromPart: "Experience",
      completed: "False",
    },
    {
      positon: "05",
      fromPart: "Projects",
      completed: "False",
    },
    {
      positon: "06",
      fromPart: "Extra Curricular Activities",
      completed: "False",
    },
    {
      positon: "07",
      fromPart: "Summary",
      completed: "False",
    },
  ];

  return(
    
    <div className="w-[80%] m-auto flex justify-around p-6 relative">
    {progress.map((pos,index)=>{
      return (
        
        <div key={index} className="flex flex-col items-center w-[14%] text-center gap-2 border-2 p-1 rounded-md border-[#0030ff] z-20">
          <Link to={pos.positon}>
          <h2 className="text-2xl font-bold">{pos.positon}</h2>
          <h2 className="font-semibold">{pos.fromPart}</h2>
           <div className="w-7 h-7 rounded-full m-auto border-2 border-[#0030ff]"> 
           </div>
           </Link>
          
        
        </div>
        
      )
    })}
    <div className="w-[full - 1.5rem] h-2 bg-black  rounded-md absolute bottom-12 z-0 left-0" ></div>
    </div>
    
  
    );
};

export default FormProgressComp;
