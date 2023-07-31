import React, { useState } from 'react'
import styles from './auth.module.scss'
import Signup from './signup'
import Login from './login'
import Logo from "../../images/logo.png"
import Image from 'next/image'


export default function Auth() {
  const [login, setlogin] = useState<boolean>(false)
  const [error, setError] = useState<{ message: string }>({
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className= { styles.container } >
      <div className={styles.image}></div>
      <div className={styles.component}>
        <div className={styles.logo}>
          <Image
            src={Logo}
            priority={true}
            max-width={'100%'}
            height={120}
            alt="logo"
           />
        </div>
        {
          login ?
            <Login  />
          :
            <Signup />
        }
      </div>
    </div>
  )
}