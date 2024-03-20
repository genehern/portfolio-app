import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../images/profile.jpg'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className='w-full h-screen place-content-center  items-center justify-center grid grid-cols-1   '>
      <img src={profile} className='rounded-full w-48  mx-auto my-8 ' />
      <div className='mx-auto max-w-[1080px] text-center'>
        <p className='text-4xl font-bold text-center'>Hey there! I'm Gene Hern, and I love </p>
        <ReactTyped
            backSpeed={30}
            typeSpeed={50}
            className={'text-3xl border-b-4 border-pink-600'}
            onBegin={function noRefCheck(){}}
            onComplete={function noRefCheck(){}}
            onDestroy={function noRefCheck(){}}
            onLastStringBackspaced={function noRefCheck(){}}
            onReset={function noRefCheck(){}}
            onStart={function noRefCheck(){}}
            onStop={function noRefCheck(){}}
            onStringTyped={function noRefCheck(){}}
            onTypingPaused={function noRefCheck(){}}
            onTypingResumed={function noRefCheck(){}}
            strings={[
              'exploring new technologies',
              'being a team player',
              'playing basketball',
              'backpacking'
            ]}
            typedRef={function noRefCheck(){}}
            loop = {true}
            backDelay = {1000}
          />

      </div>

      </div>

  );
};

export default Home;
