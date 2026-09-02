import "./Projects.css";

const Projects=()=>{
    return(
        <div> 
            <h3>My Projects</h3>
            <div  className="projects">
            <div className="project-card">
                <div className="image"></div>
                <h4>Student Progress Tracker</h4>
                <p> A web application that helps students track their academic <br />
    progress, monitor marks, attendance, and overall performance.</p>
                <p>HTML CSS JAVASCRIPT</p>
                <a href="#">Live Demo</a>
            </div>
            <div className="project-card">
                <div className="image"></div>
                <h4>Ecommerce Shopping Cloth Store</h4>
                <p> An online clothing store where users can browse products, search items, add <br /> products to the cart, and place orders through a simple and responsive interface.</p>
                <p>HTML CSS JAVASCRIPT</p>
                <a href="#">Live Demo</a>
            </div>
            </div>
        </div>
    );

}
export default Projects;