import React, { useState } from 'react'
import axios from 'axios'

import styles from './signup.module.scss'

import User from './register'
import userSchema from '@/validations/userValidation'
import * as yup from 'yup'


export default function Signup() {
  const [user, setUser] = useState<User>({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    cPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevData => ({
      ...prevData,
      [name]: value
    }))
  };


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const validation =  await userSchema.validate(user, { abortEarly: false })

      if (user.password != user.cPassword)
        setErrors({
          cPassword : 'Password not equal'
        })
      else {
        const res = await axios.post('http://localhost:3001/api/auth/register', user)
        console.log(res.data)
      }
    } catch(validationError) {
        console.log(validationError)
    }
  }


  return (
    <>
      <div className= { styles.form } >
        <h1>Create Account</h1>
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
              type="password"
              placeholder='password'
              onChange={handleChange} />
          </div>
          <div className={ styles.input6 }>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cPassword"
              name="cPassword"
              type="password"
              placeholder='cpassword'
              onChange={handleChange} />
          </div>
          <div className={styles.btn}>
            <button type='submit' >Signup</button>
          </div>
        </form>
      </div>
    </>
  )
}