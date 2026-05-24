import React from 'react'
import Register from '../Components/Register'
import Login from '../Components/Login'
import AdminDashboard from '../Components/AdminDashboard'
import { Routes,Route } from 'react-router-dom'
import AdminDisplay from '../Components/AdminDisplay'
import UserDashboard from '../Components/UserDashboard'
import AddFile from '../Components/AddFile'
import ManageFile from '../Components/ManageFile'
import ManageUsers from '../Components/ManageUsers'
import Home from '../Home'
const Content = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/admindashboard" element={<AdminDashboard/>}/>
    <Route path="/admindisplay" element={<AdminDisplay/>}/>
    <Route path="/userdisplay" element={<UserDashboard/>}/>
    <Route path="/addfile" element={<AddFile/>}/>
    <Route path="/managefile" element={<ManageFile/>}/>
    <Route path="/manageuser" element={<ManageUsers/>}/>
    <Route path="/userdashboard" element={<UserDashboard/>}/>
  </Routes>
    </div>
  )
}

export default Content
