import { Inter } from 'next/font/google'
import { useState } from 'react'
import Login from './login'
import HomePage from './HomePage'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  const [session, setSession] = useState(false)
  const handleSignOut = () => {
    signOut()
  }
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Homepage</title>
    </Head>
    <div>
      {/* {session?( */}
        <HomePage handleSignOut = {handleSignOut}/>
      {/* ): (<Login setSession = {setSession}/>)} */}
    </div>
    </>
  )
}

export default (Home)