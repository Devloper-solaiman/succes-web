import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div className="container">
            <div className="row menu-bar m-2">
                <div className="col-md-1 text-primary">
                    <p> hop </p>
                </div>
                <div className="col-md-10 menu-text">

                    <ul><NavLink className='m-t-l' to='/' >Home</NavLink ></ul>
                    <ul><NavLink className='m-t-l' to='/reviews' >REVIEWS</NavLink ></ul>
                    <ul><NavLink className='m-t-l' to='/dashboard' >DASHBOARD</NavLink ></ul>
                    <ul><NavLink className='m-t-l' to='/blogs' >BLOGS</NavLink ></ul>
                    <ul><NavLink className='m-t-l' to='/about' >ABOUT</NavLink ></ul>
                    <ul><NavLink className='m-t-l' to='/help' >HELP</NavLink ></ul>

                </div>
                <div className="col-md-1">
                    <button className='login-btn'><Link className='m-t-l' to='login'>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Menu;