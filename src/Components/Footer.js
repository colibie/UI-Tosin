import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="">
        <div className="footer-div">
            <p>agency<span>x</span></p>
            <p> A design agency shaping ideas
                into products.
                We help startups and
                enterprises invent, build and
                launch 
            </p>
        </div>
        <div className="footer-div">
            <h3>services</h3>
            <ul>
                <li>Web Design</li>
                <li>App Design</li>
                <li>Photography</li>
                <li>Videography</li>
            </ul>
        </div>
        <div className="footer-div">
            <h3>support</h3>
            <ul>
                <li>Get Support</li>
                <li>Contact</li>
                <li>My Blog</li>
                <li>Privacy Policy</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className="footer-div">
            <h3>social</h3>
            <ul>
                <li><icon>facebook</icon></li>
                <li><icon>twitter</icon></li>
                <li><icon>dribble</icon></li>
                <li><icon>linkedin</icon></li>
            </ul>
        </div>

        <p className="footer-copy"> &copy frontendtest|All rights reserved 2020 </p>
    </footer>
  );
}

export default Footer;
