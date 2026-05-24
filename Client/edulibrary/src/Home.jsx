import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <div className="home-overlay" />
      <div className="home-inner">

        <div className="home-logo">
          <div className="home-logo-icon">
            <FaBookOpen />
          </div>
          <span className="home-logo-text">Edu Library</span>
        </div>

        <span className="hero-badge">Educational Online Library</span>

        <h1 className="hero-title">
          Welcome to <span className="hero-accent">Edu Library</span>
        </h1>

        <p className="hero-desc">
          A specialized, comprehensive repository of scholarly knowledge
          in digital form. Democratizing education through high-quality
          academic ebooks and research journals —
          accessible anywhere, anytime.
        </p>

        <div className="hero-btns">
          <button
            className="btn-signin"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
          <button
            className="btn-signup"
            onClick={() => navigate('/register')}
          >
            Get Started
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">Ebooks</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-num">200+</div>
            <div className="stat-label">Journals</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home