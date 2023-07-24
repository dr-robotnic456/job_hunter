import { Inter } from 'next/font/google'
import HomePage from './ui/HomePage'
import Auth from './components/Auth'
import { useState } from 'react'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  const [session, setSession] = useState(false)
  const handleSignOut = () => {
    signOut()
  }
  return (
    <div>
      {session?(
        <HomePage handleSignOut = {handleSignOut}/>
      ): (<Login setSession = {setSession}/>)}
    </div>
  )
}

export default (Home)