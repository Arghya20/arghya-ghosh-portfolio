import React from "react";

const Skill = () => {
  return (
    <div>
      <h2 className="text-center mt-10  text-4xl font-bold text-red-500 underline uppercase">
        Technology I Use
      </h2>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid row-gap-8 grid-cols-2 sm:grid-cols-3 gap-y-16 text-xl lg:text-3xl">
          <div class="text-center bg-gradient-to-r from-gray-200  to-red-200 mx-10 py-6 rounded-lg shadow-lg ">
            <h6 class=" font-bold text-deep-purple-accent-400">HTML</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-blue-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">CSS</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-yellow-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">Java Script</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-sky-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">React</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-green-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">Node JS</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-100  to-pink-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">ExpressJS</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-green-300 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">MongoDB</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-gray-300 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">Git/GitHub</h6>
          </div>
          <div class="text-center bg-gradient-to-r from-gray-200  to-purple-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class=" font-bold text-deep-purple-accent-400">TailWind</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
