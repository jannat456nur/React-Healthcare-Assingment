import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState();

    const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleRegistration = e => {
        console.log(email, pass)
        e.preventDefault();
    }
    const { user, signInUsingGoogle } = useFirebase()
    return (
        <div className="d-flex dakters-bg-danger" id="signup">
            {/* <h1 className="m-5 text-white">Signup For Latest Updates and News</h1>
            <input className="m-5 p-0" type="text" placeholder=" your name" />
            <input className="m-5" type="password" name="" placeholder="password" id="" /> */}

            <form onSubmit={handleRegistration} className="row g-3">
                <div className="col-auto">

                    <h1 className="m-5 text-white">Signup For Latest <br /> Updates and News</h1>
                </div>
                <div className="col-auto pt-5">
                    <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
                    <input onChange={handleEmailChange} type="email" className="form-control" id="inputPassword2" placeholder="email" />
                </div>
                <div className="col-auto pt-5">
                    <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
                    <input onChange={handlePassChange} type="password" className="form-control" id="inputPassword2" placeholder="password" />
                </div>

                <div className="col-auto pt-5">
                    <Link><button type="button" className="btn btn-light">Register</button></Link>
                </div>
                <div className="col-auto pt-5">
                    <button onClick={signInUsingGoogle} type="button" className="btn btn-light">Google signIn</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;