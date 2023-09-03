import { Link } from "react-router-dom";
function Home(){
    return(
      <>
      <div>
      <h1>rend a car of your dream</h1>
      <Link to="/About">link</Link>
      </div>
      </>
    );
}
export default Home;