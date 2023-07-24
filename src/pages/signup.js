import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/form.module.css"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi"
import { FaUserCircle } from "react-icons/fa"
import Layout from "./components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [dob, setDob] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [show, setShow] = useState({password:false, cPassword:false})
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            setError("Kindly Provide Credentials")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        try {
            const userData = {
                username,
                email,
                phone,
                password
            };

            const user = await axios.post("http://localhost:3000/api/user/data", userData);
            console.log(user)
            router.push('/login');

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred during sign up");
            }
            setError(error.message)
        }
    }
    return (
        <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-3">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-2">REGISTER</h1>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit}
          className="flex flex-col gap-3">
            {error && <div>{error}</div>}
          <div className={styles.input_group}>
            <input type="text" name="username" placeholder="Username" className={styles.input_text} onChange={(e) => setUsername(e.target.value)}/>
            <span className="icon px-3 flex items-center"><FaUserCircle size={20} /></span>
          </div>
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="Email" className={styles.input_text} onChange={(e) => setEmail(e.target.value)}/>
            <span className="icon px-3 flex items-center"><HiAtSymbol size={20} /></span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show.password ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} onChange={(e) => setPassword(e.target.value)}/>
            <span className="icon px-3 flex items-center" onClick={() => setShow({...show, password:!show.password})}>
              <HiFingerPrint size={20} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show.cPassword ? "text" : "password"}`} name="confirm_password" placeholder="Confirm Password" className={styles.input_text} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <span className="icon px-3 flex items-center" onClick={() => setShow({...show, cPassword:!show.cPassword})}>
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* signUp Button */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              SignUp
            </button>
          </div>


        </form>

        {/* bottom */}
        <p className="text-center text-gray-400">Have an account? <Link href={'/login'} className="text-blue-700">Sign In</Link></p>
      </section>
    </Layout>
    )
}

export default SignUp
