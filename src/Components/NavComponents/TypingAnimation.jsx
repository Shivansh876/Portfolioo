// TypingAnimation.js
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => { 
  return (
    <div className='text-3xl py-10 '>
      <Typewriter 
        options={{
          strings: ["MERN stack developer",
          "student",
          "Software Deleveloper",
          "Passionate about coding", ],
          autoStart: true,
          loop: true,
          cursorClassName: "cursorClass"
        }}
      />
    </div>
  );
};

export default TypingAnimation;
