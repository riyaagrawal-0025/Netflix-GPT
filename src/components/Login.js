import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const[isSignInForm, setIsSignInForm] =useState(true);
  const [errormessage,seterrormessage] = useState(null);
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const name =useRef(null);
  const email= useRef(null);
  const password= useRef(null);

  const handleButtonClick=()=>{
    const message= checkValidData(email.current.value,password.current.value);
    seterrormessage(message);
    if (message) return;
    
    if(!isSignInForm){
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp"
}).then(() => {
  const{uid,email,displayName, photoURL}= auth.currentUser;
    dispatch(addUser({
        uid: uid , email:email, displayName: displayName, photoURL:photoURL}));
  navigate('/browser')
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    navigate('/browser');
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+ "-"+ errorMessage)
   
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browser');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+ "-"+ errorMessage);
  });
    }
    
  }

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);

  }



  return (
    <div className="">
     <Header/>
        <div className='absolute'>
          <img src="\netflixbg.jpg" alt="Netflix bg"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute  w-1/4  bg-black bg-opacity-70 p-12 my-36 mx-auto right-0 left-0 text-white" >
        <h1 className='font-bold text-3xl py-4'>{ isSignInForm?"Sign In" :"Sign Up"}</h1>
          {!isSignInForm && <input  ref={name} className='p-3 my-4 w-full bg-gray-600' type="text" placeholder="Full Name"/>}
          <input ref={email} className='p-3 my-4 w-full bg-gray-600' type="text" placeholder="Email Address"/>
          
          <input ref={password} type="password" placeholder='Password' className=' w-full p-3 my-4 bg-gray-600'/>
          <p className='text-red-500 text-lg py-2' >{errormessage}</p>
          <button className='w-full p-3 my-6 bg-red-800 rounded-lg ' onClick={handleButtonClick}>{ isSignInForm?"Sign In" :"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm} > {isSignInForm? "New to Netflix? Sign Up Now": "Already registered?Sign In Now"}</p>
        </form>
    
    </div>
  
    
  )
}

export default Login
