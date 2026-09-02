import "./Contact.css";

const Contact=()=>{
    return (
        <div className="contact">
            <h3>CONTACT ME</h3>
            <div>
                <label htmlFor="Name">Name: </label>
            <input type="text" name="Name" id="Name"/>
            </div>
            <div><label htmlFor="Email">Email: </label>
            <input type="email" name="Email" id="Email"/>
            </div>
            <div>
                <label htmlFor="Subject">Subject: </label>
            <input type="text" name="Subject" id="Subject"/>
            </div>
            <div>
                <label htmlFor="Message">Message: </label>
            <textarea name="Message" id="Message"></textarea>
            </div>
            <button>Send Message</button>
            <p> Email : radhikaalugoju@gmail.com</p>
            <p>Phone : +91 XXXXXXXXXX</p>
            <p>Location : Warangal, Telangana</p>
            <p>LinkedIn : <a href="#">linkedin.com/in/AlugojuRadhika</a></p>
            <p>GitHub : <a href="#">github.com/AlugojuRadhika</a></p>
        </div>
    );
}
export default Contact;