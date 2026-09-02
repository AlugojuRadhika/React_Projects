import "./About.css"
// import photo from "../assets/Professional Radhika photo.jpeg";


const About = () => {
return(
    <div className="about">
        <h3>ABOUT ME</h3>
        <div className="about-content">
        <div className="image">
        {/* <img src={photo} alt=""/> */}
        </div>
        <div className="about-text">
        <p>Hello! I'm Radhika, a recent B.Tech graduate with a strong interest in web development and software engineering.<br /> I enjoy building responsive,  user-friendly web applications and continuously learning new technologies.</p>
        <h5>Education</h5>
        <p>B.Tech in Artificial Intelligence</p>
        <p>Sumathi Reddy Institute of Technology For Women</p>
        <p>Graduated: 2026</p>
        </div>
        </div>
    </div>
);
}

export default About;