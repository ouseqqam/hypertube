import React, { useState } from 'react'
import styles from './login.module.scss'
import axios from 'axios';

interface User {
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  password: string,
  cPassword: string,
}


export default function Login() {
  const [user, setUser] = useState<User>({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    cPassword: ''
  })
  const [error, setError] = useState<{ message: string }>({
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const res = await axios.post('http://localhost:3001/auth/login', user)
        console.log(res?.data)
    } catch(err: any) {
      setError({
        message: err?.response?.data?.message
      })
      console.log(err?.response?.data?.message)
    }
  }

  return (
    <div className= { styles.container } >
      <div className={styles.image}></div>
      <div className= { styles.form } >
        <div className={styles.logo}></div>
        <h1>Create Account</h1>
        <div>{error.message}</div>
        <form onSubmit={onSubmit}>
          <div className={ styles.input1 }>
            <label htmlFor="username">Usrename</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder='Usrename'
              onChange={handleChange} />
          </div>
          <div className={ styles.input2 }>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder='password'
              onChange={handleChange} />
          </div>
          <div className={styles.btn}>
            <button type='submit' >Login</button>
          </div>
        </form>
        <div className={styles.oauth}>
          <h3>OR</h3>
          <div className={styles.btn1}>
            <button type='submit' >Google</button>
          </div>
          <div className={styles.btn1}>
            <button type='submit' >42</button>
          </div>
        </div>
      </div>
    </div>
  )
}