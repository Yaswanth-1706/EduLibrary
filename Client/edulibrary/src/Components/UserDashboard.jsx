import React, { useEffect, useState } from "react"
import axios from "axios"
import "./UserDashboard.css"
import { FaFilePdf, FaSearch, FaBook } from "react-icons/fa"

const UserDashboard = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://edulibrary-lsfi.onrender.com/files/search?search=" + (search || "a"))
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [search])

  return (
    <div className="user-page">
      <div className="user-overlay"></div>
      <div className="user-inner">

        <div className="user-header">
          <h1 className="user-title">
            <FaBook className="user-title-icon" />
            Library Dashboard
          </h1>
          <div className="user-count">{data.length} Files</div>
        </div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search Books..."
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="files-grid">
          {data.map(item => (
            <div className="file-card" key={item._id}>

              <div className="file-card-icon">
                <FaFilePdf className="pdf-icon" />
              </div>

              <div className="file-card-info">
                <div className="file-name">{item.name}</div>
                <div className="file-desc">{item.discription}</div>
              </div>

              <div className="file-divider"></div>
              <a href={item.image} target="_blank" rel="noreferrer" className="view-btn">
              <FaFilePdf className="btn-icon" />
               View PDF
               </a>

            </div>
          ))}

          {data.length === 0 && (
            <div className="no-files">No files found.</div>
          )}
        </div>

      </div>
    </div>
  )
}

export default UserDashboard