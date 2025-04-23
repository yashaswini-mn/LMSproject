import React, { useState, useEffect, useRef } from 'react';
import './content.css';

const slides = [
    {
        title: 'Empower - Upskill - Succeed',
        text: (
          <>
            <span style={{ color: '#EC5C2A', fontWeight: 'bold' }}>Empower your journey</span> with the right skills. <br />
            Upskill in technologies that matter. Stay future-ready and job-confident.<br />
            <span style={{ fontSize:'22px',fontWeight:'700'}}>Because,  <span style={{color:'#13A586', fontSize:'22px',fontWeight:'bold'}}>Success </span>begins with learning.</span>
          </>
        ),
      },
      {
        title: (
            <>
        Structured Learning and <br></br> Skill Development
        </>
        ),
        text: (
          <>
            Master skills through guided,<span style={{ color: '#EC5C2A', fontWeight: 'bold' }}> practical skills.</span>  Intensive hands-on training for real-world readiness. <br />
            Upskill in technologies that matter.  <br />Stay future-ready and job-confident.
           Instant doubt resolution and personalized mentorship.<span style={{color:'#13A586', fontSize:'22px',fontWeight:'bold'}}> <br /> Continuous feedback  </span>to sharpen your edge and grow.
          </>
        ),
      },
    {
        title: (
            <>
        Bridging the gap between <br></br> Theory and Practice
        </>
        ),
      text: (
        <>
          Turn textbook knowledge into <span style={{ color: '#EC5C2A', fontWeight: 'bold' }}>real-world skills.</span> with the right skills. <br />
          Experienced mentors guide every practical step. Interns apply what they learn in live scenarios<br />
          <span style={{ fontSize:'1px',fontWeight:'700'}}>Making every   <span style={{color:'#13A586', fontSize:'22px',fontWeight:'bold'}}>internship meaningful and career-ready</span></span>
        </>
      ),
    }
  ];
  
const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => resetTimeout();
  }, [activeIndex]);

  return (
    <div className="app-container flex">
      <div className="carousel-wrapper">
        <div
          className="slider"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="slide-content">
                <div className="font-bold text-5xl mb-4 leading-relaxed"><h2>{slide.title}</h2></div>
                <p className="text-xs" style={{ whiteSpace: 'pre-line' }}>{slide.text}</p>
              </div>
             
            </div>
          ))}
        </div>

        <div className="dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${activeIndex === i ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
