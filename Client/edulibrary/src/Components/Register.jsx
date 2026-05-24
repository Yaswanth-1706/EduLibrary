import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Register.css'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate()
    const [error,setError]=useState(false)
    const [cpassword,setCpassword]=useState("")
    const [perror,setPerror]=useState(false)
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        isAdmin:false
    })
    const [adminKey,setAdminKey]=useState("")
    const changehandler=(e)=>{
      setData(
        {
            ...data,
            [e.target.name]:e.target.value
        }
      )
     
    }
    const reset=()=>{
      setAdminKey("")
      setPerror(false)
      setError(false)
    }
    useEffect(()=>{console.log(data.isAdmin)},[data])
    const submithandler=async(e)=>{
      e.preventDefault();
      if(data.password===cpassword)
      {
      const access=(data.isAdmin&&adminKey==="admin")?"admins/addAdmin":(!data.isAdmin)?"users/addUser": setError(true)
      const responce=await axios.post(`http://localhost:2000/${access}`,data)
      console.log(responce.data)
      reset()
      console.log(adminKey)
      navigate('/login')
      }
      else
      {
        setPerror(true)
        
      }

      
    }
   
  return (
    <div className='register-container'>
      <form  className="register-form" onSubmit={submithandler} >
        <label>Name</label>
        <input type="text" name="name" placeholder='Enter your name' onChange={changehandler}/>
        <label>Email</label>
        <input type="email" name="email" placeholder='Enter your email' onChange={changehandler}/>
        <label>Password</label>
        <input type="password" name="password" placeholder='Enter password' onChange={changehandler}/>
         <label>Confirm Password</label>
        <input type="password" name="password" placeholder='Reenter password' onChange={(e)=>{
          setCpassword(e.target.value)
        }}/>
        {
          perror&&<p className='error'>conform password and password does'nt match</p>
          
        }

        <select name="isAdmin" onChange={(e)=>{ setData({
        ...data,
        isAdmin:(e.target.value==="true")?true:false
      })}}>
            <option value="false">User</option>
            <option value="true">Admin</option>
        </select>
          { data.isAdmin&& <input type="password" placeholder='enter admin key' onChange={(e)=>{
            setAdminKey(e.target.value)
          }}/>}
          {
            error&&<p className='error'>wrong Admin key, you are not alowed to register as admin</p>
          }
        <button type="submit">Register</button>
        <p>if you already have an  account</p> <p onClick={()=>{navigate('/login')}}>Login here</p>
      </form>
      
        
    </div>
  )
}

export default Register
