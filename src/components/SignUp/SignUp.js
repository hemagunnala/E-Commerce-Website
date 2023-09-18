import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { Link ,useNavigate } from "react-router-dom";
const SignUp = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email ,setEmail] = useState();
    const [password , setPassword] = useState();

    const handleSignUp =() =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch({
            type:'ADD_USER_DETAILS',
            payload: user
          })
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }
    return (
        <div className="page">
                <label>Email</label>
                <input type="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label>password</label>
                <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={handleSignUp}>SignUp</button>
        
            <h3>Already have an account ?<Link to='/login'> Sign in </Link></h3>
        </div>
    )
}
export default SignUp