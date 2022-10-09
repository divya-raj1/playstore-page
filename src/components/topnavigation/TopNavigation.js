import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Googleplayimage.svg';
import ProfileIcon from '../../assets/profileicon.png';
import './TopNavigation.css';

export default function TopNavigation() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShadow(window.scrollY > 50);
    })
  }, [])

  return (
    <nav id="topNavigation">
      <div className="container navigation-container" id={shadow ? "nav-shadow" : null}>
        <div className="navigation-logo">
            <img src={Logo} alt="Google play image"/>
            <span>Google Play</span>
        </div>
        <div className="navigation-components">
            <div className="navigation-content">
                <span>Games<span className="span selected"></span></span>
                <span>Apps<span className="span"></span></span>
                <span>Movies<span className="span"></span></span>
                <span>Books<span className="span"></span></span>
                <span>Children<span className="span"></span></span>
            </div>
        </div>
        <div className="navigation-profile">
            <div>
              <i class="material-icons">search</i>
            </div>
            <div>
              <i class="material-icons">help_outline</i>
            </div>
            <div className="navigation-profile-icon">
                <img src={ProfileIcon} alt="profileicon"/>
            </div>
        </div>
      </div>
    </nav>
  )
}
