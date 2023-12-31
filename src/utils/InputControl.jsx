import React from "react";

const InputControl = ({ label , ...props }) => {

  return (
    
      <div className={ `sm:col-span-3`}>
        { label && <label
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label} {}
        </label>}
          <div className="mt-1">
          <input
            type="text"
            {...props}
            className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          </div>
        </div>
    
  );
};

export default InputControl;
