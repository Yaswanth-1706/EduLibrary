import React, { useState, useEffect } from 'react'
import axios from "axios"
import Nav from '../Nav'
import './ManageUsers.css'
import { FaTrash, FaUsers } from 'react-icons/fa'

const ManageUsers = () => {
  const [data, setData] = useState([])
  const admin = JSON.parse(localStorage.getItem("user") || "{}")

  useEffect(() => {
    axios.get("http://localhost:2000/users/getUser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/users/deleteUser/${id}`)
      setData(prev => prev.filter(u => u._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '?'

  const avatarColors = [
    'linear-gradient(135deg,#667eea,#764ba2)',
    'linear-gradient(135deg,#f093fb,#f5576c)',
    'linear-gradient(135deg,#4facfe,#00f2fe)',
    'linear-gradient(135deg,#43e97b,#38f9d7)',
    'linear-gradient(135deg,#fa709a,#fee140)',
    'linear-gradient(135deg,#a18cd1,#fbc2eb)',
  ]

  return (
    <div>
      <div className="users-page">
        <div className="users-overlay" />
        <div className="users-inner">

          <div className="users-header">
            <div className="users-title">
              <FaUsers className="users-title-icon" />
              Manage Users
            </div>
            <span className="users-count">{data.length} users</span>
          </div>

          <div className="users-grid">
            {data.map((item, index) => (
              <div className="user-card" key={item._id}>
                <div className="user-card-top">
                  <div
                    className="user-avatar"
                    style={{ background: avatarColors[index % avatarColors.length] }}
                  >
                    {getInitial(item.name)}
                  </div>
                  <div className="user-info">
                    <div className="user-name">{item.name}</div>
                    <div className="user-email">{item.email}</div>
                  </div>
                </div>
                <span className="user-role">User</span>
                <div className="user-divider" />
                <button
                  className="remove-btn"
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash className="remove-icon" />
                  Remove
                </button>
              </div>
            ))}

            {data.length === 0 && (
              <div className="no-users">No users found.</div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ManageUsers