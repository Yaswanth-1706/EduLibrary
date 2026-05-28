import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import "./Login.css"

const Login = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const changehandler=(e)=>{
      setData(
        {
            ...data,
            [e.target.name]:e.target.value
        }
      )
     
    }
    const submithandler = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      "https://edulibrary-lsfi.onrender.com/users/userlogin",
      data
    )

    const decoded = jwtDecode(response.data.token)

    localStorage.setItem("token", response.data.token)

    localStorage.setItem(
      "user",
      JSON.stringify(decoded)
    )

    alert("Login successful")

    if (response.data.role) {
      navigate('/admindashboard', {
        state: decoded
      })
    }
    else {
      navigate('/userdashboard', {
        state: decoded
      })
    }

  }
  catch (err) {

    console.log(err)

    if (err.response) {
      alert(err.response.data.message)
    }
    else {
      alert("Server error")
    }
  }
}
    const [usertype,setUsertype]=useState(false)
  return (
    <div className='login-container' >
      <form onSubmit={submithandler} >
        {/* <button type="button" className='Role' onClick={()=>{setUsertype(false)}}>UserLogin</button> */}
        {/* <button type="button" className='Role'  onClick={()=>{setUsertype(true)}}>adminLogin</button> */}
        <label>Email</label><br/>
        <input type="email" name="email" placeholder='Enter your email' onChange={changehandler}/><br/>
        <label>Password</label><br/>
        <input type="password" name="password" placeholder='Enter password' onChange={changehandler}/>
        <button type="submit">Login</button>
        <p>if you don't have account</p> <p onClick={()=>{navigate('/register')}}>Register here</p>
      </form>
      
    </div>
  )
}

export default Login
