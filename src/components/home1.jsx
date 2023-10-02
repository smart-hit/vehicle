import homebgbmw from "../images/home-bgbmw.png";
import homebg3 from "../images/homebg3.png";
import {useNavigate} from 'react-router-dom';
function Home1(){
  const navigate = useNavigate();
  
              return(
                <>
                <div class="home1" >
                <img className="bg-shape" src={homebg3}  />
                <div class="home-main">
                  <div class="home-title">
                    <h1>
                    Unlock <span>Your</span> Next <span class="red">Adventure</span> with</h1>       
                    <h1>Seamless <span>Car</span> Rentals at Your <span class="red">Fingertips!</span>
                   </h1>
                   <h1>No <span>Prepayment</span> Just With Your<span class="red"> Credits</span>
                   </h1>
                   
                   </div>
                   
                </div>
            
                <div class="home-img">
                   <img src={homebgbmw} />
                </div>
                <div class="homebutton">
                  
                <button class="glow-on-hover" onClick={ () => navigate("/book")}>Book now</button>
                
                </div>
                </div>
                </>
              );          
}
export default Home1;