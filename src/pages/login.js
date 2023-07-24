import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import Layout from "./components/Layout";
import Link from "next/link";
import styles from "../styles/form.module.css"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi"
import Head from "next/head";
import jwt from "jsonwebtoken"
import axios from "axios";


const Login = ({setSession}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [authUser, setAuthUser] = useState(null)
  const [error, setError] = useState("")
  const [show, setShow] = useState(false);
  const router = useRouter()

  
  const handleLogin = async (e) => {
    e.preventDefault()

      try{
        const response = await axios.post("https://job-hunter-lzvu.vercel.app/api/user/login", {email, password})
        const user = response.data
        const token = response.data.token;
        setSession(true)
          
          if(token){
            jwt.decode(token)
          
          localStorage.setItem("token", token);
          setError('')
          setAuthUser(user)
          router.push("/")
          }
      }catch(error){
        setError(error)
      }
  }
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-3">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-2"></h1>
          <p className="flex w-3/4 mx-auto text-gray-400"> hello hello hello hello hello</p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          {error && <div>{error}</div>}
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <span className="icon px-3 flex items-center"><HiAtSymbol size={20} /></span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <span className="icon px-3 flex items-center" onClick={() => setShow(!show)}>
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* login */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className="input-button">
          <button onClick={() => handleGoogleSignIn()} className={styles.custom_button}>
              Sign In with Google
              <FcGoogle size={20} />
            </button>
          </div>

          <div className="input-button">
            <button type="button" className={styles.custom_button}>
              Sign In with Github
              <AiFillGithub size={20} />
            </button>
          </div>


        </form>

        {/* bottom */}
        <p className="text-center text-gray-400">dont have an account yet? <Link href={'/signup'} className="text-blue-700">Sign Up</Link></p>
      </section>
    </Layout>

  )
}

export default Login