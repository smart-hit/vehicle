
import './App.css';
import Book from './pages/book';
import Home from './pages/home';
import About from './pages/about';
import { Route ,Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Community from './pages/community';
function App() {
  return (
  <div class="appMain"> 
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="book" element={<Book />} />
    <Route path="community" element={<Community />} />
  </Routes>
  </div>
  )
}


export default App;
