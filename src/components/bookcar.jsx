import bgbookbox from "../images/bgbookbox.jpg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
function BookCar() {
  

  const [status, setStatus] = useState(undefined);
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_jkdajrc','template_txl7bkd', form.current, 'uA6A1g-CQnP-iOqK0')
     .then((result) => {
      console.log(result.text);
      console.log("check your mail");
      setStatus({ type: 'success' });

         // show the user a success message
     }, (error) => {
      console.log(error.text);
      console.log("invaild");
         // show the user an error
     });
 };


  
    return (
     
      <>
        <section id="booking-section" className="book-section">
      <img className="bookbg" src={bgbookbox}></img>
      <h1 class="bookcar">Book a Car With Your credit</h1>
      <form className="bookcarform" ref={form} onSubmit={sendEmail}>
        <div class="bookname">
        <label>Name</label>
        <input type="text" name="user_name"placeholder="Your Name"></input>
        </div>
        <div class="bookemail">
        <label for="email">E-mail</label>
        <input id="email" type="email" name="user_mail"placeholder="Your Mail"></input>
        </div>
        <div class="bookselectcar">
        <label >Select Car</label>
        <select name="car">
          <option>BMW 320</option>
          <option>VW Passat</option>
          <option>Tesla</option>
          <option>Audi-A1</option>
          <option>Mercedes</option>
          <option>Porshe</option>
        </select>
        </div >
        <div class="bookpdate">
        <label>Select Pickup Date</label>
        <input type="date"name="pick"></input>
        </div>
        <div class="bookptime">
        <label >Pickup Time</label>
        <input type="time" name="picktime"></input>
        </div>
        <div class="bookddate">
        <label>Select Drop Date</label>
        <input type="date"></input>
        </div>
        <div class="bookdtime">
        <label>Drop Time</label>
        <input type="time"></input>
        </div>
        <div class="bookploc">
        <label for="pick">Pickup location</label>
        <select >
          <option>sholinganallur</option>
          <option>Avadi</option>
          <option>T-nagar</option>
          <option>kk-nagar</option>
        </select>
        </div>
        <div class="bookdloc">
        <label>Drop Location</label>
        <select>
          <option>Sholinganallur</option>
          <option>Avadi</option>
          <option>T-nagar</option>
          <option>kk-nagar</option>
        </select>
        </div>
        <div class="carpooling">
        <label for="carlabel">Carpooling</label><br />
        <input type="checkbox"  className="checkbox" />
        
        </div>
        <div className="reserve-button">
        <input type="submit" value="Book Now" className="buttonbook" />
            </div>
            <div className="success">{status?.type === 'success' && 
        
        <h3 className="rp">Check your mail for booking details.<br />~~~RP Cars Crew</h3> 
         }
        </div> 
        </form> 
         
        </section>
  
         
      </>
    );
  }
  
export default BookCar;