import React, { useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useDispatch } from 'react-redux';
import PageHero from '../PageHero/PageHero';
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({
          type: 'ADD_USER_DETAILS',
          payload: user
        })
        navigate('/')
      })
      .catch((error) => {
      });
  }

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({
          type: 'ADD_USER_DETAILS',
          payload: user
        })
        navigate('/')
      })
      .catch((error) => {

      });
  }
  return (
    <div>
      <PageHero title='Login' />
        <div className='page'>
        <div className={styles['login-form']}>
          <h1>Login</h1>
          <div class={styles.content}>
            <div class={styles['input-field']}>
              <input type="email" placeholder="Email" autocomplete="nope" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div class={styles['input-field']}>
              <input type="password" placeholder="Password" autocomplete="new-password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
          </div>
          <div class={styles.action}>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Sign in</button>
          </div>
        </div>
        </div>
    </div>

  )
}

export default Login