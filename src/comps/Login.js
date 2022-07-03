import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../redux/userSlice';

export default function Login() {
    
    const [password, passwordSet] = useState("");
    const [email, emailSet] = useState("");
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const submitIt = (e) => {
        e.preventDefault();
        dispatch(update({ email, password }));
        };
    

  return (
    <form 
    // onSubmit={submitIt}
    >
        <input type='email' name='email' placeholder='Email' 
                onChange={(e) => emailSet(e.target.value)}
        // onChange={changeIt} value={login.email}
        />
        <input type='pwd' name='pwd' placeholder='Password'
                onChange={(e) => passwordSet(e.target.value)}
        // onChange={changeIt} value={login.pwd}
        />
        <button disabled={user.pending} onClick={submitIt}>Login</button>
        </form>
  )
}
