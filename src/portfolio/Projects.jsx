import React from 'react'
// App.js
import { useEffect, useRef, useState } from 'react';
import savebank from '../images/savebankpix.png'
import realvest from '../images/realvestphoto.png'
import calculator from '../images/calculator.png'
import game from '../images/game.png'
// import './App.css';

const items = [
  { id: 1, title: 'Spend And Income ', links: "https://incomex.netlify.app/", image: savebank, description: 'A resonsive React app website, for income and expenses recording, worked with starte management(Redux) and localstorage.' },
  { id: 2, title: 'Real Estate website', links: "https://paulestate.netlify.app/", image: realvest, description: 'A responsive real estate website, worked with local Json, Routse, Formik, Params and props.' },
  { id: 3, title: 'Simple Calculator', links: "https://calculatorbypaul.netlify.app/", image: calculator, description: 'A responsive javascript simple calculator to calculate basic mathematics and equations.' },
  { id: 5, title: 'Guess Games', links: "https://color-and-number-game.netlify.app/", image: game, description: "A responsive guess color and guess number game, i did it with javescript randoms." }
];

function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const intervalRef = useRef(null);

  function getVisibleCount() {
    return window.innerWidth < 768 ? 1 : 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    let result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(items[(currentIndex + i) % items.length]);
    }
    return result;
  };

  return (
    <div style={{ backgroundColor: "#192F6C", paddingBottom: "150px", paddingTop: "30px", color: 'white', textAlign: "center", }}>

      <h1 className='my-5'>My Projects </h1>


      <div className="carousel-wrapper h-100 container  ">
        <button className="carousel-button left" onClick={prevSlide}>&lt;</button>

        <div className="carousel " style={{ paddingBottom: "30px", paddingRight: "50px", paddingLeft: "50px" }}>
          {getVisibleItems().map((item) => (


            <div class="card  " style={{ width: "23rem" , borderBottomRightRadius:"25px", borderBottomLeftRadius:"25px"}}>
              <img src={item.image} alt="..." style={{ height: "40%" }} />
              <div class="card-body " style={{ height: "45%" }}>
                <h5 class="card-title text-white">{item.title}</h5>
                <p class="card-text text-white">{item.description}</p>
              </div>
              <a style={{
                height: "15%",
                
              }} className=' btn btn-outline-light fw-bold px-4 pt-3 rounded-pill ' href={item.links} target='_blank' rel="noopener noreferrer">
                Review Project
              </a>

            </div>


          ))}
        </div>

        <button className="carousel-button right" onClick={nextSlide}>&gt;</button>

        <div className="dots">
          {items.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

           <div className='col-lg-12 col-sm-12 col-md-12 my-5 text-white text-center p-2'>

          <h4 className="my-5 " style={{ }}>Connect to my social madia</h4>
          <div className='d-flex justify-content-between m-auto col-lg-2 col-sm-10  col-md-3 text-white social '>
            <a href="https://github.com/EzePaulNwachukwu" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            </a>


            <a href="https://x.com/soul_eze?s=21" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="X" />
            </a>

            <a href="https://www.linkedin.com/in/eze-paul-nwachukwu-37a36b279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>

          </div>
        </div>
    </div>

  );

}

export default Projects