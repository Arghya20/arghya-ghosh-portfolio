import React from "react";
import img from "../Light Room - Arghya Ghosh Linkedin.jpg";
const HeaderSection = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="grid gap-10 lg:grid-cols-2  items-center bg-gradient-to-r from-[#fef7fa]  to-[#f1eff9]  shadow-2xl rounded-xl">
          <div className="lg:pr-10 pt-6">
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-center">
              Arghya Ghosh
            </h5>
            <p className="mb-6 text-gray-900 text-center">
              Web Developer | Full-Stack Developer 
            </p>

            <div className="flex items-center space-x-4 justify-center">
              <a
                target="_blank"
                rel="noreffer"
                href="https://drive.google.com/file/d/1_AO2NwVat35OuLc1pMJFprpq8_ugs-7X/view?usp=sharing"
                className="bg-gradient-to-r from-[#d4a5fa]  to-[#d489f4] px-3 py-[10px] text-white font-bold rounded mr-2.5 shadow-xl "
              >
                Watch My Resume
              </a>
            </div>
          </div>
          <div>
            <img
              className=" w-full h-4/4   sm:h-/4 rounded-xl ml-2 p-2"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
