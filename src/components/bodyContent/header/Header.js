import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <section id="header">
      <div className="container header-container">
        <div className="header-content">
            <button><span><i class="material-icons">phone_android</i>Phone</span></button>
            <button><span><i class="material-icons">tablet_android</i>Tablet</span></button>
            <button><span><i class="material-icons">tv</i>TV</span></button>
            <button><span><i class="material-icons">laptop_chromebook</i>Chromebook</span></button>
        </div>
      </div>
    </section>
  )
}
