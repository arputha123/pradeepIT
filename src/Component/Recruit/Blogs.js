import React, { useState, useEffect } from "react";
import "../Recruit/Blogs.css"


function Blogs() {
  useEffect(() => {
    const appearOptions = {
      threshold: 0.5
    };
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScro1l = new IntersectionObserver(function (entries, appearOnScrool) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScro1l.unobserve(entry.target);
        }
      })
    }, appearOptions)
    faders.forEach(fader => {
      appearOnScro1l.observe(fader);
    })
  });
  const [blogs, setBlogs] = useState(true)
  const handlehover = () => {
    setBlogs(true)

  }
  const handleimagehover = () => {
    setBlogs(false)

  }
  return (
    <div className="home   animate-bottom"  >
      <div className="row" style={{ padding: "30px 100px", backgroundColor: "#f6f6f6" }} >
        <div class="col-lg-3">
          <h1 onMouseEnter={handleimagehover} onMouseLeave={handlehover} className="fade-in" style={{ fontSize: 18, fontWeight: 700, letterSpacing: 1, borderBottom: "2px solid black", width: blogs ? 30 : 80 }}>BLOGS</h1>
        </div>

        <div class="col-lg-3 offset-lg-6 fade-in">
          <div class="d-flex justify-content-center align-items-center">
            <div className="" style={{ fontSize: 11 }}>
              HOME
            </div>
            <div className="vl  ms-5 me-5" >
            </div>

            <div className="" style={{ fontSize: 11 }}>
              BLOGS
            </div>
          </div>
        </div>




      </div>
      <div style={{ height: 50 }}>

      </div>
      <div style={{ height: 70, backgroundColor: "#f6f6f6" }} >

      </div>
    </div>
  )
}

export default Blogs