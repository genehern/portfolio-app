import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div name='about' className='w-screen -mt-32  h-screen py-0'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Gene Hern, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have been awarded the NUS Merit Scholarship to study Computer Science at the National University of Singapore.
                While waiting for University to start, I've backpacked and travelled to Japan, Australia, and Jakarta. At the same time, I've also been learning new programming languages and building side projects as I am passionate in 
                utilising technology to improve effeciency.     </p>  
            </div>
          </div>
          <Skills />
      </div>
    </div>
  );
};

export default About;
