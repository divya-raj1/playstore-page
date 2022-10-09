import React from 'react';
import './Home.css';
import Header from './header/Header';
import Adsection from './adSection/Adsection';
import TopChart from './topCharts/TopChart';
import Recommended from './recommended/Recommended';

export default function Home() {
  return (
    <div id="home">
      <Header/>
      <Adsection/>
      <TopChart/>
      <Recommended title="Recommended for you"/>
      <Recommended title="Casual games"/>
      <Recommended title="Multiplayer games"/>
      <Recommended title="Offline games"/>
    </div>
  )
}
