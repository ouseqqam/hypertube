import React from 'react'
import styles from './signup.module.scss'

export default function Signup() {
  return (
    <div className= { styles.container } >
      <div className= { styles.form } >
        <h1>Sign up</h1>
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
        </form>
      </div>
    </div>
  )
}