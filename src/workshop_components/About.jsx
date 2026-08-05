import React from 'react'
import "./About.css";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GoGoal } from "react-icons/go";

const About = () => {
    return (
         <section className="about-section">
            <div className="about-card">

                <h1>About Me</h1>

                <p>
                    Hello! I'm <span>Radhika</span>, a passionate Java Full Stack
                    Developer with a strong interest in building responsive,
                    scalable, and user-friendly web applications.
                </p>

                <p>
                    I recently completed my B.Tech in Artificial Intelligence and
                    have hands-on experience with Java, Spring Boot, React,
                    JavaScript, HTML, CSS, SQL, and Git.
                </p>

                <p>
                    I enjoy learning new technologies, solving coding challenges,
                    and building real-world projects that improve my development
                    skills. My goal is to contribute to innovative software
                    solutions while continuously growing as a developer.
                </p>

                <div className="about-details">

                    <div className="detail-box">
                        <h3><MdOutlineCastForEducation /> Education</h3>
                        <p>B.Tech - Artificial Intelligence</p>
                    </div>

                    <div className="detail-box">
                        <h3><MdOutlineLaptopWindows /> Skills</h3>
                        <p>Java • React • Spring Boot • SQL</p>
                    </div>

                    <div className="detail-box">
                        <h3><IoLocation /> Location</h3>
                        <p>Warangal, Telangana</p>
                    </div>

                    <div className="detail-box">
                        <h3><GoGoal /> Goal</h3>
                        <p>Software Engineer</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
