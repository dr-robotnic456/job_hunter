import { Inter } from 'next/font/google'
import { useState } from 'react'
import Login from './login'
import HomePage from './HomePage'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  const [session, setSession] = useState(false)
  const handleSignOut = () => {
    signOut()
  }
  return (
    <div>
      {/* {session?( */}
        <HomePage handleSignOut = {handleSignOut}/>
      {/* ): (<Login setSession = {setSession}/>)} */}
    </div>
  )
}

export default (Home)