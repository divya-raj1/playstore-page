import React from 'react';
import './BottomNav.css';

export default function BottomNav() {
  return (
    <div id="bottomNav">
      <nav className="bottom-nav">
        <a href="#" className="bottom-section selected">
            <div className="bottom-icon"><span class="material-icons">sports_esports</span></div>
            <div className="bottom-text">Games</div>
        </a>
        <a href="#" className="bottom-section">
            <div className="bottom-icon"><span class="material-icons">apps</span></div>
            <div className="bottom-text">Apps</div>
        </a>
        <a href="#" className="bottom-section">
            <div className="bottom-icon"><span class="material-icons">theaters</span></div>
            <div className="bottom-text">Movies</div>
        </a>
        <a href="#" className="bottom-section">
            <div className="bottom-icon"><span class="material-icons">book</span></div>
            <div className="bottom-text">Boooks</div>
        </a>
        <a href="#" className="bottom-section">
            <div className="bottom-icon"><span class="material-icons">star</span></div>
            <div className="bottom-text">Children</div>
        </a>
      </nav>
    </div>
  )
}
