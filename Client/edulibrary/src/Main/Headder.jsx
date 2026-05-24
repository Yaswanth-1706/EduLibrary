import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../Nav'

const Headder = () => {
     const navigate = useNavigate()
  const location = useLocation()
  const admin = location.state ?? JSON.parse(localStorage.getItem("user") || "{}")
   useEffect(() => {
    if (!admin?.email) {
     
    }
  }, [navigate])
  
  return (
    <div>
       <Nav name={admin?.email || ""} />
       
    </div>
  )
}

export default Headder
