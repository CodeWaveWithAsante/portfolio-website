import React from "react";
import { projectStats, tools } from "../data";

const Project = () => {
  return (
    <div>
      <div
        data-aos='fade-down'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10'
      >
        {projectStats.map((p, index) => (
          <div className='flex flex-col gap-2 items-center px-4 py-3 bg-[#0000FF20] rounded-md'>
            <p className='text-white text-2xl font-bold'>{p.value}</p>
            <p className='text-white text-sm'>{p.name}</p>
          </div>
        ))}
      </div>

      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-16'
      >
        {tools.map((t, index) => (
          <div className='flex gap-2 items-center bg-white rounded-md shadow-lg px-5 py-1 '>
            <img src={t.icon} className='w-10 h-10' />
            <p className=' text-black text-md'>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
