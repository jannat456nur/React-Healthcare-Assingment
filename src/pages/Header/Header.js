import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
import logo from './logo.png'
const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div className="">
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid">
                    <img src={logo} alt="" />
                    <form className="d-flex">
                        <Link className="nav-link  disabled" aria-current="page" href="#">Doctors</Link>
                        <Link className="nav-link disabled" href="#">Hospital</Link>
                        <Link className="nav-link disabled" href="#">Clinic</Link>
                        <Link className="nav-link disabled ">Diagnostic Center</Link>
                        {/* <Link to="/blood" className="nav-link ">Home</Link> */}
                        <Link to="/blood" className="nav-link ">Blood Bank</Link>
                        <Link to="/pharmacy" className="nav-link ">Pharmacy </Link>
                        <Link to="/ambulance" className="nav-link ">Ambulance </Link>
                        <Link to="/home/#signup" className="nav-link "><i class="fas fa-sign-in-alt"></i></Link>
                        <span>{user.displayName}</span>
                        {
                            user.email ?
                                <button onClick={logOut}> LogOut</button> :
                                <Link to="/login" className="nav-link ">LogIn </Link>}

                    </form>
                </div>
            </nav>
            <hr className="horizontal"></hr>
        </div>
    );
};

export default Header;