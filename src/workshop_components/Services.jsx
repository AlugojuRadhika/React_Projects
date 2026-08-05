import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <section className="services-section">

            <h1>My Services</h1>

            <p className="service-text">
                I provide high-quality web development solutions using modern
                technologies to create responsive, scalable, and user-friendly
                applications.
            </p>

            <div className="services-container">

                <div className="service-card">
                    <div className="service-icon"></div>
                    <h2>Frontend Development</h2>
                    <p>
                        Building responsive and interactive user interfaces using
                        React, HTML, CSS, JavaScript, and Bootstrap.
                    </p>
                </div>

                <div className="service-card">
                    <div className="service-icon"></div>
                    <h2>Backend Development</h2>
                    <p>
                        Developing secure REST APIs and backend applications
                        using Java, Spring Boot, and MySQL.
                    </p>
                </div>

                <div className="service-card">
                    <div className="service-icon"></div>
                    <h2>Database Management</h2>
                    <p>
                        Designing and managing relational databases with MySQL
                        and writing efficient SQL queries.
                    </p>
                </div>

                <div className="service-card">
                    <div className="service-icon"></div>
                    <h2>Deployment</h2>
                    <p>
                        Deploying web applications using Git, GitHub, Vercel,
                        Render, and other cloud platforms.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Services
