import React from 'react';
import './SwiperChart.css';
import Chart1 from '../../../../assets/chart1.webp';
import Chart2 from '../../../../assets/chart2.webp';
import Chart3 from '../../../../assets/chart3.webp';
import Chart4 from '../../../../assets/chart4.webp';
import Chart5 from '../../../../assets/chart5.webp';
import Chart6 from '../../../../assets/chart6.webp';
import Chart7 from '../../../../assets/chart7.webp';
import Chart8 from '../../../../assets/chart8.webp';
import Chart9 from '../../../../assets/chart9.webp';


const data1 =[
    {
      id:1,
      img: Chart1,
      title: 'Save the puppy: Pet dog rescue',
      text: 'Puzzle',
      rating: 3.4
    },
    {
      id:2,
      img: Chart2,
      title: 'Ludo King™',
      text: 'Board',
      rating: 4.2
    },
    {
      id:3,
      img: Chart3,
      title: 'Doge Rescue: Draw To Save',
      text: 'Puzzle',
      rating: 4.1
    }
  ]
  
  const data2 =[
    {
      id:4,
      img: Chart4,
      title: 'Gangster Crime, Mafia City',
      text: 'Action',
      rating: 3.9
    },
    {
      id:5,
      img: Chart5,
      title: 'Carrom Pool: Disc Game',
      text: 'Sports',
      rating: 4.2
    },
    {
      id:6,
      img: Chart6,
      title: 'Snake Lite - Snake Game',
      text: 'Action',
      rating: 4.2
    }
  ]
  
  const data3 = [
    {
      id:7,
      img: Chart7,
      title: 'Candy Crush Saga',
      text: 'Casual',
      rating: 4.4
    },
    {
      id:8,
      img: Chart8,
      title: 'Hill Climb Racing',
      text: 'Racing',
      rating: 4.2
    },
    {
      id:9,
      img: Chart9,
      title: 'Indian Bikes Driving 3D',
      text: 'Simulation',
      rating: 4.4
    }
  ]

export default function Swiper(props) {
  return (
    <>
      <div className="chart-list" style={props.id === 1 ? {display:'block'} : {display:'none'}}>
            {
              data1.map(({id, img, title, text, rating}) => {
                return (
                    <div key={id} className="chart-items">
                      <div className="chart-item">
                        <a href="#">
                          <div className="chart-number">
                            <div>{id}</div>
                          </div>
                          <div className="chart-content">
                            <img src={img}/>
                            <div className="chart-texts">
                              <div className="chart-title">
                                <span>{title}</span>
                              </div>
                              <div className="chart-text">
                                <span>{text}</span>
                              </div>
                              <div className="chart-rating">
                                <span className="chart-rate">
                                  <span className="ratee">{rating}</span>
                                  <span className="rate-star">
                                    <i class="material-icons">star</i>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                )
              })
            }
            </div>
            <div className="chart-list" style={props.id === 2 ? {display:'block'} : {display:'none'}}>
              {
              data2.map(({id, img, title, text, rating}) => {
                return (
                    <div key={id} className="chart-items">
                      <div className="chart-item">
                        <a href="#">
                          <div className="chart-number">
                            <div>{id}</div>
                          </div>
                          <div className="chart-content">
                            <img src={img}/>
                            <div className="chart-texts">
                              <div className="chart-title">
                                <span>{title}</span>
                              </div>
                              <div className="chart-text">
                                <span>{text}</span>
                              </div>
                              <div className="chart-rating">
                                <span className="chart-rate">
                                  <span className="ratee">{rating}</span>
                                  <span className="rate-star">
                                    <i class="material-icons">star</i>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                )
              })
            }
            </div>
            <div className="chart-list" style={props.id === 3 ? {display:'block'} : {display:'none'}}>
              {
              data3.map(({id, img, title, text, rating}) => {
                return (
                    <div key={id} className="chart-items">
                      <div className="chart-item">
                        <a href="#">
                          <div className="chart-number">
                            <div>{id}</div>
                          </div>
                          <div className="chart-content">
                            <img src={img}/>
                            <div className="chart-texts">
                              <div className="chart-title">
                                <span>{title}</span>
                              </div>
                              <div className="chart-text">
                                <span>{text}</span>
                              </div>
                              <div className="chart-rating">
                                <span className="chart-rate">
                                  <span className="ratee">{rating}</span>
                                  <span className="rate-star">
                                    <i class="material-icons">star</i>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                )
              })
            }
        </div>
    </>
  )
}
