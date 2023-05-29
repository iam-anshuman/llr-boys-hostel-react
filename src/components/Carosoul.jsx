import React from 'react'

export default function Carosoul() {
    return (
            <section id="main" className="bg-dark text-light p-5 text-center text-sm-start" >
                <div className="container ">
                    <div className="row align-items-center justify-content-between">

                        <div className="text-center text-sm-start col-sm">
                            <h1 className="text-start">Welcome to <span className="text-warning">LLR Boys' Hostel</span></h1>

                            <p className="lead py-4"> <strong>Where we meet with our new family.</strong>  <br /> The Institute has magnificently designed separate hostels for boys
                                with all modern facilities, for boarding and other recreational activities.....
                            </p>
                            <button className="btn btn-primary btn-lg"> <a className="text-dark no-underline" href="https://www.mimitmalout.ac.in/HostelFacilities.aspx" target="_blank" rel='noreferrer'>Read more</a> </button>
                        </div>
                        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade col-sm" data-bs-ride="carousel">
                            <div className="carousel-inner ps-5">
                                <div className="carousel-item active">
                                    <img src="./images/11zon_resized/hostel2_1_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                                </div>
                                <div className="carousel-item ">
                                    <img src="./images/11zon_resized/hostel7_5_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/11zon_resized/hostel4_2_11zon.jpeg" className=" rounded d-none d-lg-block" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/11zon_resized/hostel6_4_11zon.jpg" className=" rounded d-none d-lg-block" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
  )
}
