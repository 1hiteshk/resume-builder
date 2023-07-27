import React from 'react'

const Summary = () => {
  return (
    <form>
    <div className="m-8 p-8 w-3/4 items-center mx-auto border">
      <div className="border-b border-gray-900/10 ">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Summary
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Fill the form below :
        </p>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 mb-4">
          


          <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tell us About youself more or any achievements
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  placeholder='eg. Hackathon winner'
                  id="description"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          

        
          
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
  )
}

export default Summary
