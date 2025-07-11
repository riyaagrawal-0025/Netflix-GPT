import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm, setIsSignInForm] =useState(true);

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);

  }



  return (
    <div>
     <Header/>
        <div className='absolute'>
          <img src="\netflixbg.jpg" alt="Netflix bg"/>
        </div>
        <form className="absolute  w-1/4  bg-black bg-opacity-70 p-12 my-36 mx-auto right-0 left-0 text-white" >
        <h1 className='font-bold text-3xl py-4'>{ isSignInForm?"Sign In" :"Sign Up"}</h1>
          {!isSignInForm && <input className='p-2 my-4 w-full bg-gray-600' type="text" placeholder="Full Name"/>}
          <input className='p-2 my-4 w-full bg-gray-600' type="text" placeholder="Email Address"/>
          
          <input type="password" placeholder='Password' className=' w-full p-2 my-4 bg-gray-600'/>
          <button className='w-full p-4 my-6 bg-red-800 rounded-lg'>{ isSignInForm?"Sign In" :"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm} > {isSignInForm? "New to Netflix? Sign Up Now": "Already registered?Sign In Now"}</p>
        </form>
    
    </div>
  
    
  )
}

export default Login
