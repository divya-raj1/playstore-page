import React from 'react';
import './Footer.css';
import India from '../../assets/india.png';

export default function Footer() {
  return (
    <div id="footer">
        <footer className="footer-container">
            <div className="footer-border"></div>
            <div className="footer-content">
                <section>
                    <span className="f-title">Google Play</span>
                    <a href="#" className="f-texts">
                        <p className="f-text">Play Pass</p>
                    </a>
                    <a href="#" className="f-texts">
                        <p className="f-text">Play Points</p>
                    </a>
                    <a href="#" className="f-texts">
                        <p className="f-text">Gift cards</p>
                    </a>
                    <a href="#" className="f-texts">
                        <p className="f-text">Redeem</p>
                    </a>
                    <a href="#" className="f-texts">
                        <p className="f-text">Refund policy</p>
                    </a>
                </section>
                <section>
                    <span className="f-title">Children and family</span>
                    <a href="#" className="f-texts">
                        <p className="f-text">Parent guide</p>
                    </a>
                    <a href="#" className="f-texts">
                        <p className="f-text">Family sharing</p>
                    </a>
                </section>
            </div>
            <div className="footer-bottom">
                <div className="f-b-texts">
                    <a href="#" className="f-texts">
                        <p className="f-t-para">Terms of service</p>
                    </a>
                </div>
                <div className="f-b-texts">
                    <a href="#" className="f-texts">
                        <p className="f-t-para">Privacy</p>
                    </a>
                </div>
                <div className="f-b-texts">
                    <a href="#" className="f-texts">
                        <p className="f-t-para">About Google Play</p>
                    </a>
                </div>
                <div className="f-b-texts">
                    <a href="#" className="f-texts">
                        <p className="f-t-para">Developers</p>
                    </a>
                </div>
                <div className="f-b-texts">
                    <a href="#" className="f-texts">
                        <p className="f-t-para">Google Store</p>
                    </a>
                </div>
                <div className="f-b-texts">All prices include GST.</div>
                <div className="f-b-texts f-country">
                    <div className="footer-country">
                        <img src={India}/>
                        <div>India (English (United Kingdom))</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
