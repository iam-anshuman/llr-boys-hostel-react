import React, {useState} from "react";
import {signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {auth,googleProvider} from "../DB";

export  default  function Login(){
    const [email,setEmail]= useState("");
    const [password , setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const  handleSignin = async ()=>{
        try{
            const userCredentials = await signInWithEmailAndPassword(auth,email,password);
            const  user = userCredentials.user;
            console.log(user);

        }catch (err){
            console.error("Error Code :",err.code );
            console.error("Error Message :",err.message );
        }
    }
    const  handleSigninGoogle = async ()=>{
        try{
            await signInWithPopup(auth,googleProvider);
        }catch (e) {
            console.error(e)
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
                    <form>
                            <h1 className="h3 my-4 mb-3 fw-normal text-dark">Please sign in</h1>
                        <div className="row">
                            <div className=" col-4 form-floating mb-3 mx-auto">
                                <input type="email" className="form-control " id="floatingInput"
                                       placeholder="name@example.com" onChange={event => setEmail(event.target.value)}/>
                                    <label htmlFor="floatingInput" className={"px-4"}>Email address</label>
                            </div>
                        </div>
                            <div className="row">

                            <div className="col-4 form-floating mb-3 mx-auto">
                                <input type="password" className="form-control " id="floatingPassword"
                                       placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                                    <label htmlFor="floatingPassword" className={"px-4"}>Password</label>
                            </div>
                            </div>
                        <div className="row">

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Remember me
                                </label>
                            </div>
                        </div>
                        <div className={"row my-3"}><Link to={"/"} className={"no-underline"}>Forgot Password?</Link></div>
                        <button className="btn btn-lg btn-dark my-4" style={{width:"20%",display:"block",margin:"auto"}} onClick={handleSignin} type="submit">Sign in</button>
                        <button className={"btn btn-lg btn-danger my-4 mx-4"}  type="submit" onClick={handleSigninGoogle}>Signin with Google</button>
                        <button className="btn btn-dark btn-lg" type={"submit"} onClick={handleLogout}>Logout</button>
                        <p style={{display:"block"}} className={"mx-3"}>Don't have an account?</p><Link to={"/Signup"} className={"no-underline"}>Sign Up</Link>
                    </form>
                </main>
            </div>
        <Footer/>
        </>


    )
}