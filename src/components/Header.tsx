import './styles/header.css';
import { useEffect } from 'react'


import generate_nav from './func/generate_nav';

function Header () {
    let scrolled = false;
    let last_nav_store=0;
    useEffect(() => {
        /* nav listeners */
        const nav_headers = document.querySelectorAll('.nav-li');
        const nav_elements = document.querySelectorAll('.nav-list');
        const sticky = document.querySelector('#header-sticky');

        nav_headers.forEach((n, i) => {
            if (i > 3) { return 0 };

            n.addEventListener("mouseover", () => {
                nav_elements[last_nav_store].classList.remove('nav-active');
                nav_elements[i].classList.add('nav-active');
                last_nav_store = i;
            });

            n.addEventListener("mouseout", () => {
                nav_elements[i].classList.remove('nav-active');
            });
        });

        nav_elements.forEach((e) => {
            e.addEventListener("mouseout", () => {
                e.classList.remove('nav-active');
            });
        });

        document.addEventListener("scroll", () => {
            if(window.scrollY > 0) {
                scrolled = true;
                sticky?.classList.add('sticky-active');
            } else if (scrolled) {
                sticky?.classList.remove('sticky-active');
            };
        });
    })

    return (
        <>
            <div className='header-component' id="header-top-bar">
                <div className='header-component header-top-component' id="header-top-left">
                    <a id='top-left-1' href='/'>
                        <i className="fas fa-briefcase"></i>
                        <span>Solar for Business</span>
                    </a>
                    <a id='top-left-2' href='/'>
                        <i className="fas fa-heart"></i>
                        <span>Popular Solar Packages</span>
                    </a>
                </div>

                <div className='header-component header-top-component' id="header-top-right">
                    <div>
                        <i className="fas fa-phone text-orange"></i>
                        <span className='text-orange'>1300 676 182</span>
                    </div>
                    <div className='left-bracket'>
                        <span>Blog</span>
                    </div>
                    <div className='left-bracket'>
                        <span>Payment</span>
                    </div>
                    <div className='left-bracket'>
                        <span>About Us</span>
                    </div>
                    <a href='/' className='red-button'>
                        <span>Get a Quote</span>
                    </a>
                </div>
            </div>

            <div className='header-component' id="header-sticky">
                <div id='logo-wrapper'>
                    <a href='/' className='logo-button'>
                        <img src="/SGPV-logo-standard-onblack-300.png" alt="" />
                    </a>
                </div>

                <div id='header-nav'>
                    <ul>
                        {generate_nav()}
                        <li className="menu-item">
                            <a href="/" className="nav-header">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Header;