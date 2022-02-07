import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUser } from '../reducers/UserReducer';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    /* returns user that matches email and password */
    const user = users.filter((u) => {
      return u.emailAddress === emailAddress && u.password === password;
    }).shift();
    /* if user is found, login, if not, display error message */
    (user) ? dispatch(setUser({user: user, authenticated: true})) : setLoginError(true);
  }

  return (
    <form onSubmit={login}>
      <input type="text" name="emailAddress" onChange={e => setEmailAddress(e.target.value)} placeholder="Email Address" />
      <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <p>Forgot Password?</p>
      { (loginError) ? <p style={{width: 'unset', textAlign: 'center', color: 'red', cursor: 'unset'}}>Invalid Email or Password</p> : null }
      <button type="submit">Log In</button>
      <p style={{marginBottom: 'unset', width: 'unset', textAlign: 'center'}}>Account Not Registered</p>
    </form>
  )
}

export default Login;
