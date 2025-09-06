import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/')
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const{uid,email,displayName, photoURL}= user;
    dispatch(addUser({
      uid: uid , email:email, displayName: displayName, photoURL:photoURL}));
    navigate("/browser");
    
  } else {
    // User is signed out
   dispatch(removeUser());
   navigate("/");
  
  }
});
},[]);
  return (
    <div className="absolute flex w-full px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img  className='w-44' src="\logonetflix.png" alt="logo"></img>
     { user && <div className='flex p-2'>
        <img className="w-12 h-12 " src={user?.photoURL} alt="userIcon"></img>
        <button  onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>
    }
    </div>
  )
}

export default Header
