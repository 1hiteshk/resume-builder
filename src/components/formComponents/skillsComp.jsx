import React from "react";
import InputControl from "../../utils/inputControl";

const SkillsComp = () => {
  return (
    <form>
      <div className="m-8 p-8 w-3/4 items-center mx-auto border">
        <div className="border-b border-gray-900/10 ">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Please Mention your skills
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill the form below :
          </p>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 mb-4">
            {/* {[...Array(5)].map((item, index) => */}
            
            <InputControl label="Title" placeholder="eg. Frontend Developer" />
            <InputControl label="skill1" placeholder="Communicational skill" />

            <InputControl label="Skill2" placeholder="Problem solver" />
            <InputControl label="Skills" placeholder="skills" />

            <InputControl label="Skill3" placeholder="creative thinker" />
            <InputControl label="Skill4" placeholder="React JS" />
            <InputControl label="Skill5" placeholder="JavaScript" />
            
            <InputControl label="Skill6" placeholder="Java developer"/>

          
            
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      </div>
    </form>
  );
};

export default SkillsComp;
