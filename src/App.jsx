import { useState } from "react";
import FormProgressComp from "./components/formComponents/formProgressComp";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PersonalDetailsComp from "./components/formComponents/personalDetailsComp";
import "./App.css";
import SkillsComp from "./components/formComponents/skillsComp";
import Education from "./components/formComponents/education";
import Experience from "./components/formComponents/Experience";
import Projects from "./components/formComponents/projects";
import Extra from "./components/formComponents/Extra";
import Summary from "./components/formComponents/summary";

function App() {
  return (
    <>
      <BrowserRouter>
    <div className="m-4">

      <FormProgressComp></FormProgressComp>
  
     <Routes>
      <Route index path="01" element={ <PersonalDetailsComp />}/>
      <Route index path="02" element={<SkillsComp />} />
      <Route index path="03" element={<Education />} />
      <Route index path="04" element={<Experience />} />
      <Route index path="05" element={<Projects />} />
      <Route index path="06" element={<Extra />} />
      <Route index path="07" element={<Summary />} />
     </Routes>
    </div>
         
      </BrowserRouter>  
    </>
  );
}

export default App;
