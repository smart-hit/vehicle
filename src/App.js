
import './App.css';

import Home from './pages/home'
import About from './pages/about';
import { Route ,Routes} from 'react-router-dom';
import Navbar from './components/navbar';
function App() {
  return (
  <div class="appMain"> 
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
  </Routes>
  </div>
  )
}


export default App;
