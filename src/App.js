import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    // <Home/>
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar/>

        {/* Pages */}
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
