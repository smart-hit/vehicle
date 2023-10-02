import commmanali from "../images/comm-manali.jpg";
import commcoorg from "../images/commcoorg.jpg";
function Trips(){
    return(
     <section>  
    <h1 className="comm-title"> <span className="comm-span">Trips</span>  We <span className="comm-span">Offer</span></h1>
    <div className="comm-dis-div">
    <h3 className="comm-dis">The current <span className="comm-span1">Trips</span> are listed <span className="comm-span1">below</span>.We will <span className="comm-span1">comeup</span>  with <span className="comm-span1">many</span>  such trip  <span className="comm-span1">packages</span> do <span className="comm-span1">checkout.</span> </h3>
    </div>    
    <div className="comm-manali">
        <img className="comm-manaliimg" src={commmanali} />
     <div className="gird">
        <div className="gird-item"><h1>From New Delhi to Manali</h1></div>
        <div className="gird-item">Duration-7 days.Starts on oct-5</div>
        <div className="gird-item">Cars-VW Passat,Audi-A1</div>
        <div className="gird-item">whole package including Stay,Food.</div>
        <div className="gird-item">For futher Details Contact us.</div>
        </div>   
    </div>
    <div className="comm-coorg">
        <img className="comm-coorgimg" src={commcoorg} />
     <div className="gird">
        <div className="gird-item"><h1>From Chennai to Coorg</h1></div>
        <div className="gird-item">Duration-5 days.starts on oct-7</div>
        <div className="gird-item">Cars-Benz-sclass,BMW-Q7</div>
        <div className="gird-item">whole package including Stay,Food.</div>
        <div className="gird-item">For futher Details Contact us.</div>
        </div>   
    </div>
     </section>
    );
}
export default Trips;