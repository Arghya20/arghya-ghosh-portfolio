import React from "react";

const Skill = () => {
  return (
    <div>
      <h2 className="text-center mt-10 text-4xl font-bold text-red-500 underline">
        My Skill
      </h2>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid row-gap-8 sm:grid-cols-3 gap-y-16">
          <div class="text-center bg-red-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">HTML</h6>
          </div>
          <div class="text-center bg-blue-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">CSS</h6>
          </div>
          <div class="text-center bg-yellow-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              Java Script
            </h6>
          </div>
          <div class="text-center bg-sky-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              React
            </h6>
          </div>
          <div class="text-center bg-green-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              Node JS
            </h6>
          </div>
          <div class="text-center bg-gray-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              ExpressJS
            </h6>
          </div>
          <div class="text-center bg-green-300 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              MongoDB
            </h6>
          </div>
          <div class="text-center bg-gray-300 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              Git/GitHub
            </h6>
          </div>
          <div class="text-center bg-purple-200 mx-10 py-6 rounded-lg shadow-lg">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">
              TailWind
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
