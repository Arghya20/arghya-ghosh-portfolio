import React from "react";
import project1 from "../Img/edit-nexus.png";
import project2 from "../Img/scrate-learn.png";
import project3 from "../Img/quizzy.png";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-10 text-red-600 uppercase underline mb-10">
        Projects
      </h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-sky-100 rounded-xl">
        <div className="flex gap-10 lg:flex-row-reverse flex-col-reverse items-center justify-center ">
          <div className="ml-10">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={project1}
              alt=""
            />
          </div>
          <div className="lg:pl-14 ">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              EDIT NEXUS
            </h5>
            <p className="mb-6 text-gray-900">
              .............................................
            </p>
            <a
              target="_blank"
              rel="noreffer"
              href="https://storied-souffle-a09cd3.netlify.app/"
              className="bg-blue-500 px-4 py-3.5 text-white font-bold rounded mr-2.5 shadow-xl "
            >
              View Live Site
            </a>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ second ----------------------------------------- */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-green-100 rounded-xl">
        <div className="flex gap-10 lg:flex-row flex-col-reverse items-center">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={project2}
              alt=""
            />
          </div>
          <div className="lg:pl-14 ">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Scrate Learn
            </h5>
            <p className="mb-6 text-gray-900">
              .............................................
            </p>
            <a
              target="_blank"
              rel="noreffer"
              href="https://assignment-10-course-site.netlify.app/"
              className="bg-green-500 px-4 py-3.5 text-white font-bold rounded mr-2.5 shadow-xl "
            >
              View Live Site
            </a>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- third ------------------------------- */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-yellow-100 rounded-xl">
        <div className="flex gap-10 lg:flex-row-reverse flex-col-reverse items-center justify-center">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={project3}
              alt=""
            />
          </div>
          <div className="lg:pl-14 ">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Quizzy
            </h5>
            <p className="mb-6 text-gray-900">
              .............................................
            </p>
            <a
              target="_blank"
              rel="noreffer"
              href="https://assignment-9-quiz-react-app.netlify.app/"
              className="bg-yellow-500 px-4 py-3.5 text-white font-bold rounded mr-2.5 shadow-xl "
            >
              View Live Site
            </a>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
