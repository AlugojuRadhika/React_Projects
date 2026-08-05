import React from 'react';
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <Link to="/"><h2>My Page</h2></Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
                <Link to="/profile"><CgProfile  className="profile-icon" /></Link>
            </div>
        </nav>
    )
}

export const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h3>Hello, I'm Radhika</h3>
                <p className="designation">Java Full Stack Developer</p>
                <p className="about">Recent B.Tech graduate specializing in Artificial Intelligence with strong skills in Java, Spring Boot, React, JavaScript, HTML, CSS, SQL, and Git. I love building scalable web applications, solving coding challenges, and continuously learning modern technologies to create impactful digital solutions.</p>
            </div>
        </section>
    );
}
export const Footer = () => {
    return (
        <footer>
            <a href="#">radhikaalugoju04@gmail.com</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">LeetCode</a>
        </footer>
    );
}

