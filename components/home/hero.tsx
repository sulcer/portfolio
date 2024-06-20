import React from 'react';

const Hero = () => {
  return (
    <div
      className={'text-center text-3xl py-24 flex flex-col gap-y-3 font-bold'}
    >
      <p>Full Stack Software Engineer</p>
      <p className={'font-medium hidden sm:block'}>
        focused on creating interactive digital
      </p>
      <p className={'font-medium hidden sm:block'}>experiences on the web</p>
    </div>
  );
};

export default Hero;
