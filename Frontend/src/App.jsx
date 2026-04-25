import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🔗</span>
            <span className="logo-text">LinkLy</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <div className="nav-btns">
            <button className="btn-text">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="badge">New: Link Analytics 2.0 🚀</div>
          <h1 className="hero-title">
            Shorten. Share. <br />
            <span className="text-gradient">Optimize.</span>
          </h1>
          <p className="hero-subtitle">
            The premium link management platform for creators and businesses. 
            Track every click and maximize your reach with LinkLy.
          </p>

          <div className="hero-btns">
            <button className="btn-primary-large">Start for Free</button>
            <button className="btn-secondary-large">
              <span className="play-icon">▶</span> How it Works
            </button>
          </div>
        </section>

        {/* Mock URL Input Section */}
        <section className="input-section">
          <div className="glass-card input-card">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Paste your long link here..." 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button className="btn-accent">Shorten Now</button>
            </div>
            <p className="input-tip">Try it out - no account required!</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2 className="section-title">Everything you need</h2>
          <div className="features-grid">
            <div className="glass-card feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Real-time data on your clicks, devices, and top locations.</p>
            </div>
            <div className="glass-card feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Links</h3>
              <p>Password protection and expiration dates for your links.</p>
            </div>
            <div className="glass-card feature-card">
              <div className="feature-icon">✨</div>
              <h3>Custom Branding</h3>
              <p>Use your own domain and customize your link slugs.</p>
            </div>
          </div>
        </section>

        {/* GitHub Button */}
        <section className="cta-github">
          <button className="btn-github">
            <span className="github-icon">github</span> View on GitHub
          </button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 LinkLy. Built with ❤️ for the web.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;