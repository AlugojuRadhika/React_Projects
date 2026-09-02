import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav>
                <h1>Portfolio</h1>
                <div className="words">
                    <span>About</span>
                    <span>Projects</span>
                    <span>Skills</span>
                    <span>Contact</span>
                    <span>Resume</span>
                </div>
            </nav>
        </div>
    );
}
export default Header;