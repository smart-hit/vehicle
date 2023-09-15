import phoneicon from "../images/phoneicon.png";
import emailicon1 from "../images/emailicon1.png";
function About(){
    return(
        <>
        <section>
        
        <div className="about-main">
        <div className="about-com">
        <h1>About Company</h1>
        <p>Hey this is RPcars team,we are extremely delighted to help you rend a vehicle for you.We offers a big range of vehicles for all your driving needs.We have the perfect car to meet your needs. </p>
        </div>
        <div className="about-con">
        <h1>Contact Us</h1>
        <img className="phone-img" src={phoneicon} /> 
        <h3 className="contact">8825727926</h3>
        <img className="email1-img" src={emailicon1} /> 
        <h3 className="email">rpcars@gmail.com</h3>
        <h3></h3>
        <p></p>
        </div>
        <div className="about-work">
             <ul className="footer-content">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

        </div>
        </div>
        </section>
        </>
    )
}

export default About;