import React from 'react';
import SwiperChart from './swipeTopchart/SwiperChart';
import './TopChart.css';

export default function TopChart() {
  return (
    <section id="topChart">
      <header className="top-chart-header">
        <div className="top-chart-head">
            <span>Top Charts</span>
        </div>
      </header>
      <div>
          <div className="top-chart-button">
            <div className="top-chart-button-box">
                <div role="button" className="top-button">
                    <div className="top-span">
                        <span>Top free</span>
                    </div>
                </div>
                <div role="button" className="top-button">
                    <div className="top-span">
                        <span>Top Grossing</span>
                    </div>
                </div>
                <div role="button" className="top-button">
                    <div className="top-span">
                        <span>Top paid</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <SwiperChart/>
    </section>
  )
}
