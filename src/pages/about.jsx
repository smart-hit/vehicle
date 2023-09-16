import phoneicon from "../images/phoneicon.png";
import emailicon1 from "../images/emailicon1.png";
import aboutbg from "../images/aboutbg.png";
import review1 from "../images/review1.jpg";
import review2 from "../images/review2.jpg";
import quote from "../images/quote.jpg";
function About(){
    return(
        <>
        <section>
        <img className="about-bgimg" src={aboutbg} />
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
        
        </div>
        <div className="about-work">
             <ul className="footer-content">
              <li className="work">Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

        </div>
        
            <div className="review1">
                <h1>Client's Testimonials</h1>
                <h3>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</h3>
                <h1 className="harry">Harry Potter</h1>
                <img className="review1-img" src={review1} />
                <img className="quote1" src={quote} /> 
            </div>
            
            <div className="review2">
            <h1>Client's Testimonials</h1>
                <h3>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h3>
                <h1 className="hermi">Hermione Granger</h1>
                <img className="review2-img" src={review2} />
                <img className="quote" src={quote} />
                </div>
              
        </div>
        </section>
        </>
    )
}

export default About;