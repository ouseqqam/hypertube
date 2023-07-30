import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/components/auth/login'
import { useState } from 'react'
import Auth from '@/components/auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [signup, setSignup] = useState()
  return (
    <>
      <Auth />
    </>
  )
}