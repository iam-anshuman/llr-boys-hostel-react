import React from 'react'

export default function Testimonial() {
  return (
    <>
      <section >
      <h1 className="text-center text-dark">Our respected wardens</h1>
      <div className="cards row justify-content-evenly">
        <div className="cardi col-sm">
          <h2 className="card-title">Warden</h2>
          <img src="./images/raje.png" alt=""/>
          <p className="card-desc"><b>Dr. Subhash Ahuja </b><br/>&#9679;Warden Boys’ Hostel-1 <br/>&#9679;Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cardi col-sm">
          <h2 className="card-title">Chief Warden</h2>
          <img src="./images/sm.png" alt=""/>
          <p className="card-desc">
            <b>Dr. Vijay Samyal </b><br/>
            &#9679;Chief Warden boy's hostel-1 <br/>
            &#9679;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="cardi col-sm">
          <h2 className="card-title">Warden</h2>
          <img src="./images/aj.png" alt=""/>
          <p className="card-desc"><b>Er. Ravinder Kumar </b><br/>&#9679;Warden Boys’ Hostel-2<br/>
            &#9679;Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <br/>
    <hr/>
    </section>
    </>
  )
}
