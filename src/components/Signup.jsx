import React, {useState} from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import {auth , fireDB , googleProvider} from "../DB";
import {collection,addDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword ,signInWithPopup ,signOut } from "firebase/auth";
import Footer from "./Footer";
export  default  function Signup(){

    const [name,setName] = useState("");
    const [phone,setPhone] = useState(null);
    const [dob , setDOB] = useState(null);
    const [email,setEmail] = useState("")
    const [password , setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    const handleSignup = async ()=>{

        try{
            await createUserWithEmailAndPassword(auth , email , password);
        } catch (error){
            console.error(error)
        }


}

const  handleSignupGoogle = async  ()=>{
        try{
            await signInWithPopup(auth,googleProvider);
        }catch (err){
            console.error(err);
        }
}
const  handleLogout = async ()=>{
        try{
            await signOut(auth);
        }catch (err){
            console.error(err);
        }
}
    return(
        <>
            <Navbar/>
            <div className="text-center">

                <main className="form-signin">
                    <form className={"needs-validation"} noValidate={false}>
                        <h1 className="h3 my-4 mb-3 fw-normal text-dark">Register Here</h1>
                        <div className="row">
                            <div className=" col-4 form-floating mb-3 mx-auto">
                                <input type="text" className="form-control " id="floatingInput01"
                                       placeholder="Enter Your Name" onChange={event => setName(event.target.value)} required/>
                                <label htmlFor="floatingInput01" className={"px-4"}>Full Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-4 form-floating mb-3 mx-auto">
                                <input type="number" className="form-control " id="floatingInput02"
                                       placeholder="1234567890" onChange={event => setPhone(event.target.value)} required/>
                                <label htmlFor="floatingInput02" className={"px-4"}>Phone Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-4 form-floating mb-3 mx-auto">
                                <input type="date" className="form-control " id="floatingInput03"
                                      onInput={event => setDOB(event.target.value)} required/>
                                <label htmlFor="floatingInput03" className={"px-4"} >Date of birth</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-4 form-floating mb-3 mx-auto">
                                <input type="email" className="form-control " id="floatingInput04"
                                       placeholder="name@example.com" onChange={event => setEmail(event.target.value)} required/>
                                <label htmlFor="floatingInput04" className={"px-4"}>Email address</label>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-4 form-floating mb-3 mx-auto">
                                <input type="password" className="form-control " id="floatingPassword"
                                       placeholder="Password" onChange={event => setPassword(event.target.value)} required/>
                                <label htmlFor="floatingPassword" className={"px-4"}>Password</label>
                            </div>
                        </div>

                        <button className="btn btn-lg btn-dark my-4 mx-4" type="submit" onClick={handleSignup}>Sign Up</button>
                        <button className={"btn btn-lg btn-danger my-4 mx-4"}  type="submit" onClick={handleSignupGoogle}>Signup with Google</button>
                        <button className="btn btn-dark btn-lg" type={"submit"} onClick={handleLogout}>Logout</button>
                        <p style={{display:"block"}} className={"mx-3"}>Already have an account?</p><Link to={"/Login"} className={"no-underline"}>Sign In</Link>
                    </form>
                </main>
            </div>
            <Footer/>
        </>
    )
}