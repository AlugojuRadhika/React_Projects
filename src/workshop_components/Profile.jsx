import React from 'react'
import "./Profile.css";

const Profile = () => {
    return (
        <section className="profile-section">

            <div className="profile-card">
                
                <div className="profile-details">

                    <h1>Radhika Alugoju</h1>

                    <h3>Java Full Stack Developer</h3>

                    <p>
                        Passionate Full Stack Java Developer with knowledge of
                        Java, Spring Boot, React, HTML, CSS, JavaScript, SQL,
                        and Git. I enjoy building responsive web applications
                        and continuously learning new technologies.
                    </p>

                    <div className="profile-info">

                        <div className="info-box">
                            <h4>Education</h4>
                            <p>B.Tech - Artificial Intelligence</p>
                        </div>

                        <div className="info-box">
                            <h4>Location</h4>
                            <p>Warangal, Telangana</p>
                        </div>

                        <div className="info-box">
                            <h4>Experience</h4>
                            <p>Fresher</p>
                        </div>

                        <div className="info-box">
                            <h4>Skills</h4>
                            <p>Java • React • Spring Boot • SQL</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Profile
