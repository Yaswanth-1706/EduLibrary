import React from 'react'
import "./AdminDashboard.css"
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaFolderOpen } from 'react-icons/fa'

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="dashboard-container">
      <button
        className="dashboard-btn"
        onClick={() => navigate('/manageuser')}
      >
        <FaUsers size={48} />
        <span>Manage Users</span>
      </button>

      <button
        className="dashboard-btn"
        onClick={() => navigate('/managefile')}
      >
        <FaFolderOpen size={48} />
        <span>Manage Files</span>
      </button>
    </div>
  )
}

export default AdminDashboard