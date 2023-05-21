import React from 'react'

export default function Carosoul() {
    return (
            <section id="main" className="bg-dark text-light p-5 text-center text-sm-start" >
                <div className="container ">
                    <div className="d-sm-flex align-items-center justify-content-between">

                        <div className="text-center text-sm-start">
                            <h1>Welcome to <span className="text-warning">LLR Boys' Hostel</span></h1>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <img src="./images/11zon_resized/hostel2_1_11zon.jpg" className=" d-lg-none " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./images/11zon_resized/hostel4_2_11zon.jpg" className=" d-lg-none " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./images/11zon_resized/hostel7_5_11zon.jpg" className=" d-lg-none " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./images/11zon_resized/hostel5_3_11zon.jpg" className=" d-lg-none " alt="..." />
                                    </div>
                                </div>
                            </div>
                            <p className="lead py-4"> <strong>Where we meet with our new family.</strong>  <br /> The Institute has magnificently designed separate hostels for boys
                                with all modern facilities, for boarding and other recreational activities.....

                            </p>
                            <button className="btn btn-primary btn-lg"> <a className="text-dark no-underline" href="https://www.mimitmalout.ac.in/HostelFacilities.aspx" target="_blank" rel='noreferrer'>Read more</a> </button>
                        </div>
                        <div id="carouselExampleSlidesOnly" className="carousel slide ml-1" data-bs-ride="carousel">
                            <div className="carousel-item active">
                                <img src="./images/11zon_resized/hostel2_1_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                            </div>
                            <div className="carousel-item ">
                                <img src="./images/11zon_resized/hostel7_5_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/11zon_resized/hostel5_3_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/11zon_resized/hostel6_4_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
  )
}
