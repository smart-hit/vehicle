import homeMain from "../images/homeMain.png";
import homebg3 from "../images/homebg3.png";
import {useNavigate} from 'react-router-dom';
function Home1(){
  const navigate = useNavigate();
  
              return(
                <>
                <div class="full" >
                <img className="bg-shape" src={homebg3}  />
                <div class="home-main">
                  <div class="home-title">
                    <h1>
                    Unlock <span>Your</span> Next <span class="red">Adventure</span> with</h1>       
                    <h1>Seamless <span>Car</span> Rentals at Your <span class="red">Fingertips!</span>
                   </h1>
                   
                   </div>
                   
                </div>
            
                <div class="home-img">
                   <img src={homeMain} />
                </div>
                <div class="button">
                  
                <button class="glow-on-hover" onClick={ () => navigate("/book")}>Book now</button>
                
                </div>
                </div>
                </>
              );          
}
export default Home1;