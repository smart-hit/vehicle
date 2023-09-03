import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
import about from './pages/about us';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
    </Routes>
    </>
  )
}


export default App;
