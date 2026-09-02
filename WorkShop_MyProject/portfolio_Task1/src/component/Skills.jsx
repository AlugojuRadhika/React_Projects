import "./Skill.css";

const Skills=()=>{
    return(
        <div className="skills-section">
        <h3>My Skills</h3>
        <div className="skills">
            <div className="frontend">
                <h5>Frontend</h5>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
            </div>
            <div className="backend">
                <h5>Backend</h5>
                <span>Java</span>
                <span>SQL</span>
            </div>
            <div className="tools">
                <h5>Tools</h5>
                <span>Git</span>
                <span>GitHub</span>
            </div>
        </div>
        </div>
    );
}
export default Skills;