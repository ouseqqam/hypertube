import React, { useState } from 'react'
import styles from './signup.module.scss'
import axios from 'axios';

interface User {
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  password: string,
  cPassword: string,
}


export default function Signup() {
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
    console.log(user)
    try {
      if (user.password != user.cPassword)
        setError({
          message : 'Password not equal'
        })
      else {
        const res = await axios.post('http://localhost:3001/auth/register', user)
        console.log(res.data)
      }
    } catch(err: any) {
      setError({
        message: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }

  return (
    <>
      <div className= { styles.form } >
        <div className={styles.logo}></div>
        <h1>Create Account</h1>
        <div>{error.message}</div>
        <form onSubmit={onSubmit}>
          <div className={ styles.input1 } >
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder='Email'
              onChange={handleChange} />
          </div>
          <div className={ styles.input2 }>
            <label htmlFor="username">Usrename</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder='Usrename'
              onChange={handleChange} />
          </div>
          <div className={ styles.input3 }>
            <label htmlFor="firstName">First Name</label>
            <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder='First Name'
            onChange={handleChange} />
          </div>
          <div className={ styles.input4 }>
            <label htmlFor="lasttName">last Name</label>
            <input
            id="lastName"
            name="lastName"
              type="text"
              placeholder='lastName'
              onChange={handleChange} />
          </div>
          <div className={ styles.input5 }>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder='password'
              onChange={handleChange} />
          </div>
          <div className={ styles.input6 }>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cPassword"
              name="cPassword"
              type="text"
              placeholder='cpassword'
              onChange={handleChange} />
          </div>
          <div className={styles.btn}>
            <button type='submit' >Signup</button>
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
    </>
  )
}