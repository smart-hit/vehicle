import carpic1 from "../images/carpic1.png";
function Home1(){
              return(
                <>
                <section>
                <div class="home-main">
                  <div class="home-title">
                    <h1>
                    Unlock <span>Your</span> Next <span class="red">Adventure</span> with</h1>       
                    <h2>Seamless <span>Car</span> Rentals at Your <span class="red">Fingertips!</span>
                   </h2>
                   
                   </div>
                   
                </div>
                <div class="button">
                <button class="glow-on-hover" type="button">Book now!</button>
                </div>
                <div class="home-img">
                   <img src={carpic1} />
                </div>
                </section>
                </>
              );          
}
export default Home1;