import React, { useState } from "react";
import {collection,addDoc,serverTimestamp} from "firebase/firestore"
import {fireDB} from "../DB.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import MyModal from "./MyModal";


export default function Contact() {
  const [name, setName] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [isSubmit,setIsSubmit] = useState(false)

  const handleClick = async()=>{
    try{
      await addDoc((collection(fireDB,"Queries")),{
        "Name":name,
        "Room_number":roomNo,
        "Phone_number":phone,
        "Query":query,
        "timestamp":serverTimestamp()
      });
      setIsSubmit(true);
      setName("");
      setRoomNo("");
      setPhone("");
      setQuery("");
    } catch (error){
      console.error(error)
    }

    
  }

  return (
    <>
      <Navbar />
      <section className="contact">
        <form className="contactForm">
          <div className="segment">
            <h1>Contact Us </h1>
          </div>

          <label className="contactLabel">
            <input
              className="form formInput"
              type="text"
              id="hostelerName"
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
              placeholder="Enter Name"
            />
          </label>
          <label className="contactLabel">
            <input
              className="form formInput"
              type="tel"
              id="hostelerRoomNum"
              onChange={(e)=>{setRoomNo(e.target.value)}}
              value={roomNo}
              placeholder="Enter Room No."
            />
          </label>
          <label className="contactLabel">
            <input
              className="form formInput"
              type="number"
              id="hostelerPhoneNum"
              onChange={(e)=>{setPhone(e.target.value)}}
              value={phone}
              placeholder="Enter Phone No."
            />
          </label>
          <label className="contactLabel">
            <textarea
              className="form formInput"
              id="hostelerQuery"
              style={{ height: "10rem", borderRadius: "20px" }}
              type="text"
              onChange={(e)=>{setQuery(e.target.value)}}
              value={query}
              placeholder="Enter problem or query"
            />
          </label>
          <Link to="/Contact" className="cta " onClick={handleClick}>
            <span>SUBMIT</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
          </form>
      </section>
<MyModal isSubmit={isSubmit} closingButton={setIsSubmit}/>
      <Footer />
    </>
  );
}
