import React from 'react'
import styles from './signup.module.scss'
import Image from 'next/image';
import background from '../../images/film.jpeg'

export default function Signup() {
  return (
    <div className= { styles.container } >
      <div className={styles.image}></div>
      <div className= { styles.form } >
        <div className={styles.logo}></div>
        <h1>Create Account</h1>
        <form>
          <div className={ styles.input1 } >
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder='Email' />
          </div>
          <div className={ styles.input2 }>
            <label htmlFor="username">Usrename</label>
            <input id="username" type="text" placeholder='Usrename' />
          </div>
          <div className={ styles.input3 }>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder='First Name' />
          </div>
          <div className={ styles.input4 }>
            <label htmlFor="lasttName">last Name</label>
            <input type="text" placeholder='lastName' />
          </div>
          <div className={ styles.input5 }>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder='password' />
          </div>
          <div className={ styles.input6 }>
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="text" placeholder='cpassword' />
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
    </div>
  )
}