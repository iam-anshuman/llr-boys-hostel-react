import React from 'react';
import Navbar from './Navbar';
import Carosoul from './Carosoul';
import Testimonial from './Testimonial';
import Search from './Search';
import NoticeBoard from './NoticeBoard';
import Map from './Map';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carosoul />
      <Testimonial />
      <Search />
      <NoticeBoard/>
      <Map/>
      <Footer/>
    </>
  )
}
