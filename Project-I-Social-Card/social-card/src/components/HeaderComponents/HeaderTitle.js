import React from 'react';
import './Header.css';


const HeaderTitle= () =>{
  return (
    <div className='cardHeader'>
      <div className='userInfoContainer'>
        <h1 className='userName'> Lambda School </h1>
        <h2 className='timeStamp'>@LambdaSchool - 27 May 19 </h2>
      </div>
      <div className='text'>
        <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
      </div>
    </div>

  );
  };
  
  export default HeaderTitle;