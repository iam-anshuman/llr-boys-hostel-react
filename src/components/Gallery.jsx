import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ImageViewer } from "react-image-viewer-dv"


export default function Gallery() {
  return (
    <>
      <Navbar/>
      <h1 className='text-center gallery-heading text-dark'>Gallery</h1>
       <div className="text-center gallery">
          <ImageViewer >
            <img src={"./images/11zon_resized/hostel2_1_11zon.jpg"}  alt="gallery 1" />
            <img src={"./images/11zon_resized/hostel4_2_11zon.jpeg"}  alt="gallery 2" />
            <img src={"./images/11zon_resized/hostel5_3_11zon.jpeg"}  alt="gallery 2" />
            <img src={"./images/11zon_resized/hostel2_1_11zon.jpg"}  alt="gallery 2" />
            <img src={"./images/11zon_resized/hostel4_2_11zon.jpeg"}  alt="gallery 2" />
            <img src={"./images/11zon_resized/hostel6_4_11zon.jpg"}  alt="gallery 2" />
            <img src={"./images/11zon_resized/hostel7_5_11zon.jpg"}  alt="gallery 2" />
          </ImageViewer>
        </div>
      <Footer/>
    </>
  )
}
