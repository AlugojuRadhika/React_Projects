import React from 'react'
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact-section">

            <div className="contact-container">
                <div className="contact-info">

                    <h1>Contact Me</h1>

                    <p>
                        I'm always open to discussing new opportunities,
                        collaborations, or interesting projects. Feel free
                        to reach out!
                    </p>

                    <div className="info">
                        <h3> Email</h3>
                        <p>radhikaalugoju04@gmail.com</p>
                    </div>

                    <div className="info">
                        <h3> Location</h3>
                        <p>Warangal, Telangana</p>
                    </div>

                    <div className="info">
                        <h3> Role</h3>
                        <p>Java Full Stack Developer</p>
                    </div>

                </div>

                <div className="contact-form">

                    <h2>Send a Message</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                        ></textarea>

                        <button>Send Message</button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Contact
