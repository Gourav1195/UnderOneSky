import React, {useState} from 'react';
import SignIn from "./Sign-in";
import SignUp from "./Sign-up";


const LogPage = () => {
  const user = null;
  return (
    <div>
  {(!user) ? 

  (<SignIn /> ) :

   (<div> 
    <h3> logged in successfully {user.name}</h3>
  </div>)}
    </div>
  )
}

export default LogPage