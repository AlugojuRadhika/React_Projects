import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-info">
            <h3>Alugoju Radhika</h3>
            <p>Thank you for visiting my portfolio.
                Feel free to connect with me!
            </p>
            <div className="footer-details">
                <div className="details">
                <a href="#About">About |</a>
                <a href="#Projects">Projects |</a>
                <a href="#Skills">Skills |</a>
                <a href="#"Contact>Contact</a>
            </div>
            <div className="details">
                <a href="#">GitHub |</a>
                <a href="#">LinkedIn |</a>
                <a href="#">Email</a>
            </div>
            <div className="details">
                <p>&copy; 2026 Radhika Alugoju. All Rights Reserved.</p>
            </div>
            </div>
        </footer>
    );
}
export default Footer;