import tripimg1 from "../images/tripimg1.png";
import Trips from "../components/trips";
import Events from "../components/events";
function Community(){
    return(
    <>
    <section>
    <Trips />
    <img className="trip1" src={tripimg1} />
    <Events />
    </section>
    </>
    );
}
export default Community;