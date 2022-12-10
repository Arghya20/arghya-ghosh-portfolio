import React from "react";

const Form = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-center ">
        <form
          novalidate=""
          action=""
          className="flex flex-col w-full max-w-xl p-12 rounded shadow-lg  ng-untouched ng-pristine ng-valid  my-10"
          data-bitwarden-watching="1"
        >
          <h2 className="text-xl font-bold mb-6">Contect Me</h2>
          <label for="username" className="self-start text-xs  ">
            Name
          </label>
          <input
            id="username"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2   bg-gray-100 focus:ring-violet-400 shadow-md"
          />
          <label for="username" className="self-start text-xs  mt-4">
            Email
          </label>
          <input
            id="username"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2   bg-gray-100 focus:ring-violet-400 shadow-md"
          />
          <label for="username" className="self-start text-xs  mt-4">
            Massage
          </label>
          <textarea
            className="bg-gray-100 shadow-md"
            name=""
            id=""
            cols="10"
            rows="7"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-lg rounded bg-green-400 text-white font-bold "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
