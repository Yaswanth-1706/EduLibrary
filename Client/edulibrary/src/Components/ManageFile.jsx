import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import AdminDisplay from './AdminDisplay'
import './ManageFile.css'
import { FaFolderOpen, FaPlus } from 'react-icons/fa'

const ManageFile = () => {
  const navigate = useNavigate()
  const admin = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <div>
      <div className="files-page">
        <div className="files-overlay" />
        <div className="files-inner">

          <div className="files-header">
            <div className="files-title">
              <FaFolderOpen className="files-title-icon" />
              Manage Files
            </div>
            <button
              className="add-files-btn"
              onClick={() => navigate('/addfile')}
            >
              <FaPlus className="add-icon" />
              Add Files
            </button>
          </div>

          <AdminDisplay />

        </div>
      </div>
    </div>
  )
}

export default ManageFile