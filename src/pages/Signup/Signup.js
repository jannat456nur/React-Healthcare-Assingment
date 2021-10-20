import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css'

const Signup = () => {
    const { user, signInUsingGoogle, verify,
        handleRegistration,
        toogleLogIn,
        handleEmailChange,
        handlePassChange, setError, login, error } = useFirebase()


    return (
        // <div className="d-flex dakters-bg-danger" id="signup">


        //     <form onSubmit={handleRegistration} className="row g-3">
        //         <div className="col-auto">

        //             <h1 className="m-5 text-white">Signup For Latest <br /> Updates and News</h1>
        //         </div>
        //         <div className="col-auto pt-5">
        //             <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
        //             <input onChange={handleEmailChange} type="email" className="form-control" id="inputPassword2" placeholder="email" />
        //         </div>
        //         <div className="col-auto pt-5">
        //             <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
        //             <input onChange={handlePassChange} type="password" className="form-control" id="inputPassword2" placeholder="password" />
        //         </div>

        //         <div className="col-auto pt-5">
        //             <Link><button type="button" className="btn btn-light">Register</button></Link>
        //         </div>
        //         <div className="col-auto pt-5">
        //             <button onClick={signInUsingGoogle} type="button" className="btn btn-light">Google signIn</button>
        //         </div>
        //     </form>
        // </div>

        <div className="App">
            <form onSubmit={handleRegistration}>
                <h4>Please {login ? "Login" : "Register"}</h4>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" class="form-control w-75" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input onBlur={handlePassChange} type="password" class="form-control w-75" id="inputPassword3" />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input onChange={toogleLogIn} class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" class="btn btn-primary">{login ? "Login" : "Registration"}</button>
            </form>

            <div className="col-auto pt-5">
                <button onClick={signInUsingGoogle} type="button" className="btn btn-light">Google signIn</button>
            </div>
        </div>

    );
};

export default Signup;