import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { useState } from "react";

const HeroLogin = () => {

    const [registerEror,setregisterEror]=useState("")
    const handleheroSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        setregisterEror("")

        createUserWithEmailAndPassword(auth,email,password)
        .then( Result =>{
            const emailpass = Result.user
            console.log(emailpass)
        })
        .catch(eror =>{
            console.error(eror)
            setregisterEror(eror.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleheroSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {
                registerEror && <p className="text-red-600">{registerEror}</p>
            }
          </div>
        </div>
      </div>
    );
};

export default HeroLogin;